#!/bin/bash

tar -zcvf ../blog.tar.gz .
scp ../blog.tar.gz blog:/tmp
ssh blog '. ~/.zshrc; sh /Nepeta/deploy.sh'