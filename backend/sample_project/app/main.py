from fastapi import FastAPI
import requests
import requests

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

