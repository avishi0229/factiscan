from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torch.nn as nn
from torchvision import models, transforms
from PIL import Image
import io
import os

app = Flask(__name__)
CORS(app)  # This allows your React app to talk to Flask

# --- ML Model Setup ---
MY_CLASSES = ["AI_Generated", "Real_Image"]
DEVICE = torch.device("cuda" if torch.cuda.is_available() else "cpu")

def get_model(num_classes):
    model = models.resnet50(weights=None)
    num_ftrs = model.fc.in_features
    model.fc = nn.Sequential(
        nn.Linear(num_ftrs, 512),
        nn.ReLU(),
        nn.Dropout(0.3),
        nn.Linear(512, num_classes),
        nn.LogSoftmax(dim=1)
    )
    return model

# Load model once when server starts
model = get_model(len(MY_CLASSES)).to(DEVICE)
MODEL_PATH = "scene_ai_detector.pth"

if os.path.exists(MODEL_PATH):
    model.load_state_dict(torch.load(MODEL_PATH, map_location=DEVICE))
    model.eval()
else:
    print("Warning: model file not found!")

# Image Preprocessing
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

@app.route('/analyze', methods=['POST'])
def analyze():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    try:
        # Read image from memory without saving to disk
        img = Image.open(io.BytesIO(file.read())).convert('RGB')
        img_t = transform(img)
        batch_t = torch.unsqueeze(img_t, 0).to(DEVICE)

        with torch.no_grad():
            out = model(batch_t)
            prob = torch.exp(out)
            conf, index = torch.max(prob, 1)
        
        return jsonify({
            'label': MY_CLASSES[index[0]],
            'confidence': float(conf[0].item())
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)