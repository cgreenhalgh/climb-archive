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

## Build archive

```
git clone https://github.com/cgreenhalgh/music-archive.git
```
