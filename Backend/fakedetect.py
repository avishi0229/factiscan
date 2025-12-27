from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

app = Flask(__name__)
CORS(app)  # allow React requests

MODEL_PATH = "./final_fnd_model"
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

print("Running on:", device)

tokenizer = AutoTokenizer.from_pretrained(MODEL_PATH)
model = AutoModelForSequenceClassification.from_pretrained(MODEL_PATH)
model.to(device)
model.eval()

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    text = data.get("text", "")

    if not text:
        return jsonify({"error": "No text provided"}), 400

    inputs = tokenizer(
        text,
        return_tensors="pt",
        truncation=True,
        padding=True,
        max_length=128
    ).to(device)

    with torch.no_grad():
        outputs = model(**inputs)

    probs = torch.softmax(outputs.logits, dim=-1)[0]
    pred = torch.argmax(probs).item()

    return jsonify({
        "label": "Fake" if pred == 1 else "Legit",
        "confidence": float(probs[pred]),
        "fake_prob": float(probs[1]),
        "legit_prob": float(probs[0])
    })

if __name__ == "__main__":
    app.run(debug=True, port=5000)
