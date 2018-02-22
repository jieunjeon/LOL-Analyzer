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


        recentMatches = requests.get(
            "https://na1.api.riotgames.com//lol/match/v3/matchlists/by-account/37040458/recent?api_key="+args,
            params = args
        )

        summonerProf = requests.get(
            "https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/deserteagie?api_key="+args,
            params = args
        )

        #print recentMatches.URL
        print(recentMatches.json())

        check = recentMatches.json()
        check2 = summonerProf.json()
        print(check)

        print(type(recentMatches))
        print(type(check))



        with open('./data/apitest.json', 'w') as fp:
            json.dump(check, fp)

        with open('./data/apitest2.json', 'w') as fp:
            json.dump(check2, fp)


    def test (self):
        api_url = "v1.4/summoner/by-name/Teemo?api_key=RGAPI-e6af808d-ed47-4403-b09d-43dadba22b80"

        return self._request(api_url)
