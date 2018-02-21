from RiotAPI import RiotAPI

def main() :
    api = RiotAPI('RGAPI-6b4103c7-2ad7-4a95-aff2-4b5153ddaa27')
    tmp = api.test()


    print "in main.js"
    print tmp


main()
