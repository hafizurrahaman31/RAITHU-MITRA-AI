import tensorflow as tf
import numpy as np


model = tf.keras.models.load_model(
    "plant_disease_model.h5"
)


CLASS_NAMES = [
    "Pepper Bell Bacterial Spot",
    "Pepper Bell Healthy",
    "Potato Early Blight",
    "Potato Late Blight",
    "Potato Healthy",
    "Tomato Bacterial Spot",
    "Tomato Early Blight",
    "Tomato Late Blight",
    "Tomato Leaf Mold",
    "Tomato Septoria Leaf Spot",
    "Tomato Spider Mites",
    "Tomato Target Spot",
    "Tomato Yellow Leaf Curl Virus",
    "Tomato Mosaic Virus",
    "Tomato Healthy",
]


def predict_disease(processed_image):

    predictions = model.predict(
        processed_image
    )

    predicted_index = np.argmax(
        predictions[0]
    )

    confidence = float(
        np.max(predictions[0])
    )

    predicted_class = CLASS_NAMES[
        predicted_index
    ]

    return predicted_class, confidence