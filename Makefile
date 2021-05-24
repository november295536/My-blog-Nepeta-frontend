yarn:
	yarn

production.build: yarn
	yarn build_production

production.deploy:
	sh nuxt-deploy.sh

production.build-and-deploy: production.build production.deploy