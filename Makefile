yarn:
	yarn

production.build: yarn
	yarn build_production

production.deploy:
	sh nuxt-deploy.sh

production.rollback:
	ssh nov29 '. ~/.zshrc; sh /Nepeta/rollback.sh'

production.build-and-deploy: production.build production.deploy