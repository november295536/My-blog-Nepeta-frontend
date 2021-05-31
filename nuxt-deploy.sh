#!/bin/bash

tar cf - . -P | pv -s $(du -sb . | awk '{print $1}') | gzip > ../blog.tar.gz
scp ../blog.tar.gz nov29:/tmp
ssh nov29 -tt '. ~/.zshrc; sh /Nepeta/deploy.sh'
rm ../blog.tar.gz
