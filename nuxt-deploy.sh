#!/bin/bash

tar cf - . -P | pv -s $(du -sb . | awk '{print $1}') | gzip > blog.tar.gz
scp blog.tar.gz blog:/tmp
ssh blog '. ~/.zshrc; sh /Nepeta/deploy.sh'
rm blog.tar.gz
