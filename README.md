# Climb! standalone archive

Stuff to make a standalone web archive for Climb!, initially for the FAST IMPACt project industry day.

Copyright (c) The University of Nottingham, 2018

## Overview

Depends on docker.

requires:
- nginx front-end web server, as reverse proxy and to serve static app files and local video files
- archive web app, built from [music-archive](https://github.com/cgreenhalgh/music-archive)
- archive data files - see below

for meld sync view, also requires:
- TBD

for muzivisual sync view, also requires:
- muzivisual app files
- muzivisual config files

Archive data files are:
- "assets/data/urls.json" - index of other data files
- "assets/data/records.json" - annalist base definitions
- "assets/data/climb-stages-20170825.json" - climb! stage (part) definitions
- "assets/data/climb-performances-20170608.json" - pre-hub performance information
- "assets/data/climb-recordings-20170608.json" - pre-hub recording information
- "assets/data/musichub-performances.json" - hub performance and recording information (date, venue, performer, recording(s)) for all post-hub performances
- "assets/data/performance-XXXX-annalist.json" - per-performance set of log upload info (e.g. timing, stages played, codes played) for all post-hub performances

As per the mrl music server, the default URL for the archive will be `1/archive/`. This requires URL rewriting for HTML5 navigation.

## Build 

Archive:

```
git clone https://github.com/cgreenhalgh/music-archive.git
cd music-archive/archive-app
sudo docker build -t archive-app .
sudo docker run --rm archive-app cat /root/work/archive.tgz| cat - > archive.tgz
cd ../..
(cd volumes/html/1/archive; tar zxf ../../../../music-archive/archive-app/archive.tgz)
```

data
```
cp data/archive/* volumes/html/1/archive/assets/data/
sed -i -e 'sX"http://music-mrl.nott.ac.uk/X"/X' volumes/html/1/archive/assets/data/musichub-performances.json
sed -i -e 'sX"http://music-mrl.nott.ac.uk/X"/X' volumes/html/1/archive/assets/data/climb-recordings-20170608.json

```

local recordings:
```
cd volumes/html/1/recordings
sftp XXX@XXX
cd /srv/mrl/mrl-music/html/1/recordings/
mget *
```
currently 
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

Nginx frontend:
```
cd nginx
sudo docker build -t frontend .
```

## Run

one time:
```
sudo docker network create --driver bridge internal

sudo docker run --name frontend -d --restart=always --network=internal \
  -p :80:80 -v `pwd`/volumes/html:/usr/share/nginx/html \
  -v `pwd`/volumes/logs/nginx:/var/log/nginx/log frontend 
```
