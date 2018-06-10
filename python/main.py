from RiotAPI import RiotAPI

def main() :
    api = RiotAPI('RGAPI-e6af808d-ed47-4403-b09d-43dadba22b80')
    tmp = api.test()


    print("in main.js")
    print(tmp)


main()
