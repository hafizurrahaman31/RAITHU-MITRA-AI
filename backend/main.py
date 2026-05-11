from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from ml.utils.preprocess import preprocess_image
from ml.predictions.predict import predict_disease
from ml.utils.recommendations import DISEASE_INFO
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CropRequest(BaseModel):

    season: str

    water: str

@app.get("/")
def home():
    return {
        "message": "Raithu Mithra AI Backend Running"
    }


@app.post("/predict")
async def predict_image(
    file: UploadFile = File(...)
):

    processed_image = preprocess_image(file.file)

    predicted_class, confidence = (
        predict_disease(processed_image)
    )

    disease_data = DISEASE_INFO.get(
        predicted_class,
        {
            "pesticide": "Consult local expert",
            "tips": ["No recommendation available"]
        }
    )

    return {
        "prediction": predicted_class,
        "confidence": round(confidence * 100, 2),
        "pesticide": disease_data["pesticide"],
        "tips": disease_data["tips"]
    }
    
@app.post("/crop-recommend")

async def recommend_crop(
    data: CropRequest
):

    if (
        data.season == "Summer"
        and
        data.water == "Low"
    ):

        crop = "Millets 🌾"

    elif (
        data.season == "Rainy"
        and
        data.water == "High"
    ):

        crop = "Rice 🌾"

    elif (
        data.season == "Winter"
        and
        data.water == "Medium"
    ):

        crop = "Wheat 🌾"

    else:

        crop = "Groundnut 🌱"

    return {
        "crop": crop
    }