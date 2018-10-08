# Climb! standalone archive

Stuff to make a standalone web archive for Climb!, initially for the FAST IMPACt project industry day.

Copyright (c) The University of Nottingham, 2018

## Overview

Depends on docker.

requires:
- nginx front-end web server, as reverse proxy and to serve static app files and local video files
- archive web app, built from [music-archive](https://github.com/cgreenhalgh/music-archive)
- archive data files - see below
- muzivisual app files

for meld sync view, also requires:
- TBD

Archive data files are:
- "assets/data/urls.json" - index of other data files
- "assets/data/records.json" - annalist base definitions
- "assets/data/climb-stages-20170825.json" - climb! stage (part) definitions
- "assets/data/climb-performances-20170608.json" - pre-hub performance information
- "assets/data/climb-recordings-20170608.json" - pre-hub recording information
- "assets/data/musichub-performances.json" - hub performance and recording information (date, venue, performer, recording(s)) for all post-hub performances
- "assets/data/performance-XXXX-annalist.json" - per-performance set of log upload info (e.g. timing, stages played, codes played) for all post-hub performances

As per the mrl music server, the default URL for the archive will be `1/archive/`. This requires URL rewriting for HTML5 navigation.

## Quick Build

Get local copies of recordings.

Build Nginx frontend:
```
cd nginx
sudo docker build -t frontend .
cd ..
```

Meld services
```
git clone https://github.com/oerc-music/meld-web-services
cp data/meld/* meld-web-services
cd meld-web-services
sudo docker build -t meld -f ../Dockerfile.meld .
cd ..
```

meld client
```
git clone https://github.com/oerc-music/climb-score-archive
cd climb-score-archive
sudo docker build -t meldclient -f ../Dockerfile.meldclient .
cd ..
```



## Run

one time:
```
sudo docker network create --driver bridge internal

sudo docker run --name frontend -d --restart=always --network=internal \
  -p :80:80 -v `pwd`/volumes/html:/usr/share/nginx/html \
  -v `pwd`/volumes/logs/nginx:/var/log/nginx/log frontend 

sudo docker run --name meld -d --restart=always --network=internal \
  -p :5000:5000 meld
sudo docker run --name meldclient -d --restart=always --network=internal \
  -p :8080:8080 meldclient

```

View archive on `http://localhost:80/1/archive/explore/Climb` (docker only) 
or `http://localhost:8000/1/archive/exploreClimb` (docker in vagrant)

Add `?meld` to URL to view meld score. 
Note Meld view only works for All Your Bass and RCC performances. 

## Re-Build 

Archive:

```
git clone https://github.com/cgreenhalgh/music-archive.git
cd music-archive/archive-app

sudo docker build -t archive-app .
sudo docker run --rm archive-app cat /root/work/archive.tgz| cat - > archive.tgz
cd ../..
(cd volumes/html/1/archive; tar zxf ../../../../music-archive/archive-app/archive.tgz)
```

Data (and use local file URLs):
```
cp data/archive/* volumes/html/1/archive/assets/data/
sed -i -e 'sX"http://music-mrl.nott.ac.uk/X"/X' volumes/html/1/archive/assets/data/musichub-performances.json
sed -i -e 'sX"http://music-mrl.nott.ac.uk/X"/X' volumes/html/1/archive/assets/data/climb-recordings-20170608.json
# or dev
sed -i -e 'sX"http://music-mrl.nott.ac.uk/X"http://localhost:8000/X' volumes/html/1/archive/assets/data/musichub-performances.json
sed -i -e 'sX"http://music-mrl.nott.ac.uk/X"http://localhost:8000/X' volumes/html/1/archive/assets/data/climb-recordings-20170608.json
```

Muzivisual (for archive):
```
git clone https://github.com/cgreenhalgh/muzivisual.git
(cd muzivisual; git checkout linkapps)
(cd muzivisual/app/public; tar zcf - *) | (cd volumes/html/1/archive-muzivisual; tar zxf -)
```
(data/archive.json moved into muzivisual/app/public/data/)

## Dev

```
sudo docker run --name archive --rm -it -p :4200:4200 -p :9876:9876 archive-app /bin/sh
`npm bin`/ng serve --host=0.0.0.0
```
(will need to fix recording urls)
```
cp data/archive/* volumes/html/1/archive/assets/data/
sed -i -e 'sX"http://music-mrl.nott.ac.uk/X"http://localhost:8080/X' volumes/html/1/archive/assets/data/musichub-performances.json
sed -i -e 'sX"http://music-mrl.nott.ac.uk/X"http://localhost:8080/X' volumes/html/1/archive/assets/data/climb-recordings-20170608.json
```

access localhost:4200 

## Recordings

E.g. get from music hub server:
```
cd volumes/html/1/recordings
sftp XXX@XXX
cd /srv/mrl/mrl-music/html/1/recordings/
mget *
```
currently using:
```
'Climb! Iittala Perf 1-480-149ec5c1b9c037e08f8713759cc5c1e3.mp4'
'Climb! Iittala Perf 2-480-bdcb00dc8b34422dbf14bf4eea28fc67.mp4'
 Climb_AYB_Anne-front.mp4
 Climb_AYB_Anne-roughmix.mp3
 Climb_AYB_Zubin-front.mp4
 Climb_AYB_Zubin-roughmix.mp3
 Climb_RCC2018_1-front.mp3
 Climb_RCC2018_1-front-480.mp4
 Climb_RCC2018_2-front.mp3
 Climb_RCC2018_2-front-480.mp4
 Performance1_480_v2.mp4
 Performance1_mix2.mp3
 Performance2_480_v2.mp4
 Performance2_mix2.mp3
 Rehearsal_480_v2.mp4
 Rehearsal_mix2.mp3
```

## MELD integration

See [David's fork](https://github.com/oerc-music/music-archive) ?!

Archive app does:
- init: meldWindow = window.open('http://localhost:8080/archive', 'window', null);	
- click performance: meldWindow.postMessage({type: "performance", payload:perf.id}, "*"); (or "" if null perf)
- click part: meldWindow.postMessage({type: "fragment", payload:part.id}, "*");

### David's instructions

To replicate my setup:

Repos:
* https://github.com/oerc-music/music-archive (my hacked fork of your archive, now both several commits ahead and behind yours I'm afraid)
* https://github.com/oerc-music/meld-web-services 
* https://github.com/oerc-music/climb-score-archive

#### Install and run music-archive:

```
git clone git@github.com:oerc-music/music-archive
cd music-archive/archive-app
npm install -g @angular/cli
npm install --no-bin-links
ng serve --host=0.0.0.0
```

#### Install and run meld-web-services
```
git clone https://github.com/oerc-music/meld-web-services
# copy the three tgz files (Climb composition and performance metadata) attached here into the meld-web-services folder
cd meld-web-services
tar xvzf mei.tgz
tar xvzf score.tgz
tar xvzf sessions.tgz
# ensure libxml2-devel and libxslt2-devel (or equivalent dev packages) are installed on system
dnf install libxml2-devel libxslt2-devel
#ensure python2 environment:
mkvirtualenv -p python2 meld # or just use system's python 2 and pip 2
pip install -r requirements.txt
# extract Climb! score and performance session files (attached)
# set up environment
source set_env.sh
# run server
python manage.py runserver 
```

#### Install and run climb-score-archive
```
git clone git@github.com:oerc-music/climb-score-archive
cd climb-score-archive 
npm install
npm start
```

#### Running the demo

* Point a web browser at http://localhost:4200/explore/Climb
* This will open my hacked version of your Climb music archive, which will in turn open the MELD climb score archive in a pop up (you may need to tell your browser to allow this explicitly)
* Move the popup to a separate screen, or tile the windows so both archives are visible
* Select a performance (and optionally stage) in the Nottingham archive. Corresponding scores with performance-specific MELD annotations are loaded in score archive.

I've just replicated all of the above on a fresh Fedora install so am fairly confident it all works :-) 
 
Note however that I've had to hack out the early Nottingham performances (using CSS hacks) because they were pre-MELD-rebase (and thus the score archive wouldn't work with them). Depending on how egregious you find this interference, we could perhaps refine this before the industry day.
