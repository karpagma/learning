import webbrowser
import requests

print('Let"s find an old website.')
site = input('Type a website URL: ')
era = input('Type a year, month, & day (e.g, 20150613): ')
url = 'http://archive.org/wayback/available?url=%ss&timestamp=%s' % (site, era)
response = requests.get(url)
data = response.json()
try:
    old_site = data['archived_snapshots']['closest']['url']
    print('the site is ... ' + old_site)
    print('Found this copy: ', old_site)
    print('It should appear in the your browser now.')
    webbrowser.open(old_site)
except:
    print('Sorry, no luck finding', site)
