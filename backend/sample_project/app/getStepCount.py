import requests
import base64

class FitbitApi:
    UnauthorizedError = Exception("Access token was expired. Please take a new access token by using the refresh token.")

    def __init__(self, client_id, client_secret, access_token, refresh_token):
        self.client_id = client_id
        self.client_secret = client_secret
        self.access_token = access_token
        self.refresh_token = refresh_token

    def get_steps(self, begin, end):
        url = f"https://api.fitbit.com/1/user/-/activities/steps/date/{begin}/{end}.json"
        headers = {'Authorization': f'Bearer {self.access_token}'}

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            content = response.json()
            return content['activities-steps']
        elif response.status_code == 401:
            raise self.UnauthorizedError
        else:
            print(response.text)

    def token_refresh(self):
        url = "https://api.fitbit.com/oauth2/token"
        payload = {
            'grant_type': 'refresh_token',
            'client_id': self.client_id,
            'refresh_token': self.refresh_token
        }
        headers = {
            'Authorization': f'Basic {self._get_base64_encoded_credentials()}'
        }

        response = requests.post(url, data=payload, headers=headers)

        if response.status_code == 200:
            content = response.json()
            self.access_token = content['access_token']
            self.refresh_token = content['refresh_token']
        else:
            print(response.text)

    def _get_base64_encoded_credentials(self):
        credentials = f"{self.client_id}:{self.client_secret}"
        encoded_credentials = base64.b64encode(credentials.encode('utf-8')).decode('utf-8')
        return encoded_credentials

import datetime
import base64
import requests

class FitbitApi:
    UnauthorizedError = Exception("Access token was expired. Please take a new access token by using the refresh token.")

    def __init__(self, client_id, client_secret, access_token, refresh_token):
        self.client_id = client_id
        self.client_secret = client_secret
        self.access_token = access_token
        self.refresh_token = refresh_token

    def get_steps(self, begin, end):
        url = f"https://api.fitbit.com/1/user/-/activities/steps/date/{begin}/{end}.json"
        headers = {'Authorization': f'Bearer {self.access_token}'}

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            content = response.json()
            return content['activities-steps']
        elif response.status_code == 401:
            raise self.UnauthorizedError
        else:
            print(response.text)

    def token_refresh(self):
        url = "https://api.fitbit.com/oauth2/token"
        payload = {
            'grant_type': 'refresh_token',
            'client_id': self.client_id,
            'refresh_token': self.refresh_token
        }
        headers = {
            'Authorization': f'Basic {self._get_base64_encoded_credentials()}'
        }

        response = requests.post(url, data=payload, headers=headers)

        if response.status_code == 200:
            content = response.json()
            self.access_token = content['access_token']
            self.refresh_token = content['refresh_token']
        else:
            print(response.text)

    def _get_base64_encoded_credentials(self):
        credentials = f"{self.client_id}:{self.client_secret}"
        encoded_credentials = base64.b64encode(credentials.encode('utf-8')).decode('utf-8')
        return encoded_credentials

# Google Apps Scriptの ScriptProperties は Python では使えないので、必要に応じて適切な方法でアクセストークンとリフレッシュトークンを取得してください。

# 直近1週間の日付を取得
begin = datetime.datetime.now() - datetime.timedelta(days=7)
end = datetime.datetime.now() - datetime.timedelta(days=1)
begin_str = begin.strftime('%Y-%m-%d')
end_str = end.strftime('%Y-%m-%d')

# FitBit APIを使って歩数を取得
fitbit = FitbitApi(
    "BSVM99",
    "6cdbea143845e2e5330004ffb918de45",
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1JHNlEiLCJzdWIiOiJCU1ZNOTkiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJybG9jIHJhY3QgcmhyIiwiZXhwIjoxNzAwMzIzMTYyLCJpYXQiOjE3MDAyOTQzNjJ9.dJYj_coy4ienS11jgujaZeT5rl2a9Loax4rNxs14tZM",  # 適切なアクセストークンに置き換えてください
    "fee19b34ac6ab14a3639a2b56953275413d78496a85aeaa0c9bc8b81c0eada94"  # 適切なリフレッシュトークンに置き換えてください
)

try:
    steps = fitbit.get_steps(begin_str, end_str)
except Exception as ex:
    if ex == FitbitApi.UnauthorizedError:
        # トークンが期限切れたらリフレッシュした上でリトライ
        fitbit.token_refresh()
        print(f"FITBIT_ACCESS_TOKEN: {fitbit.access_token}")
        print(f"FITBIT_REFRESH_TOKEN: {fitbit.refresh_token}")
        steps = fitbit.get_steps(begin_str, end_str)
    else:
        print(ex)

print(steps)