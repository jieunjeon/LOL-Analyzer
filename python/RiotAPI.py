import requests
import json
import RiotConsts as Consts

class RiotAPI (object) :

    def __init__(self, api_key, region=['north_america']):

        self.region = region

    def _request(self, api_url, params={}):
        args = ("RGAPI-e6af808d-ed47-4403-b09d-43dadba22b80")

        for key, value in list(params.items()):
            if key not in args:
                args[key] = value


        response = requests.get(
            "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/deserteagie?api_key=RGAPI-e6af808d-ed47-4403-b09d-43dadba22b80",
            params = args
        )

        #print response.URL
        print(response.json())

        check = response.json()
        print(check)

        print(type(response))
        print(type(check))



        with open('../data/test_180220.json', 'w') as fp:
            json.dump(check, fp)



    def test (self):
        api_url = "v1.4/summoner/by-name/Teemo?api_key=RGAPI-e6af808d-ed47-4403-b09d-43dadba22b80"

        return self._request(api_url)
