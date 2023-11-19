import requests
import json
import main

url = "http://localhost:8000/sampleusers/sample"

def getSpotByStep(latitude, longitude, stepCount,stepLength,spotType):
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json"
    api_key = 'AIzaSyDQAj6Xy8ZDMAs_4K-1aI2jY1DetwJ6XoY'


    radius = stepCount * stepLength
    
    params = {
        'location': f"{latitude},{longitude}",
        
        'radius': radius, #ユーザー指定
        'type': spotType,
        'key': api_key
    }

    response = requests.get(url, params)

    if response.status_code == 200:
        results = response.json().get('results', [])
        
        spots = []
        for result in results:
            spot = {
                'name': result.get('name', ''),
                'id': result.get('place_id', ''),
                'location': {
                    'latitude': result.get('geometry', {}).get('location', {}).get('lat', ''),
                    'longitude': result.get('geometry', {}).get('location', {}).get('lng', '')
                },
            }
            spots.append(spot)

        return {'parks': spots}
    else:
        print(f"Error: {response.status_code}")
        return None

if __name__ == "__main__":
    # 現在地の座標を札幌駅で仮定
    userLatitude = 43.062096
    userLongitude = 141.354376
    userSettingStepCount = 5000

    res = requests.get(url,json)
    print(res)


    parksNearUser = getSpotByStep(userLatitude, userLongitude, stepCount=userSettingStepCount)

    print(parksNearUser)
