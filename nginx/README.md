# Nginx frontend

Note: on virtual box `sendfile` must be disabled (`off`), but should be 
on for efficiency on deployment platform. See `nginx.conf`

Also note, typically nginx doesn't seem to start properly when the 
domain names in the config do not resolve, so typically other servers 
need to be set up and running first under docker.

Build:
```
sudo docker build -t frontend .
```

Volumes:
- /usr/share/nginx/html - HTML
- /var/log/nginx/log - weblogs

Ports:
- 80 - HTTP

Configuration:
- baked into image (nginx.conf & conf.d/default.conf)

Run (e.g.):
```
cd ..
sudo docker network create --driver bridge internal

sudo docker run --name frontend -d --restart=always --network=internal \
  -p :80:80 -v `pwd`/volumes/html:/usr/share/nginx/html \
  -v `pwd`/volumes/logs/nginx:/var/log/nginx/log frontend 
```

