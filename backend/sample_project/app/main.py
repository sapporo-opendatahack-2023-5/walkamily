from fastapi import FastAPI
import json
import requests
import parkLocator

app = FastAPI()

sampleUser = {
    "id": "sample",
    "name": {
        "first": "Sample",
        "last": "User"
    },
    "address": {
        "latitude": 43.0625318,
        "longitude": 141.3535791
    }
}

@app.get("/sampleusers/{userID}")
async def getSampleUser(userID: str):
    return sampleUser


@app.get("/spot/{userID}")
async def getSpot(userID: str):
    sampleExe = parkLocator.getSpotByStep(43.0625318, 141.3535791, 5000, 0.7,"park")
    return sampleExe
