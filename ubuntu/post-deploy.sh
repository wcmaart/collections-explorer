#!/bin/sh

cd /usr/local/wcma/projects

# the deploy installs as root, so just chown all the things
sudo chown -R ubuntu:ubuntu ./wcma-collections-explorer

cd ./wcma-collections-explorer

yarn install

yarn build

pm2 restart "wcma-collections-explorer" --env production --update-env
