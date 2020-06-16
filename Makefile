.PHONY: initialize start commit build

initialize:
	npx lerna bootstrap --hoist

start:
	npm run start

commit:
	git add .
	git commit -am "$(MESSAGE)"
	git push origin HEAD
	./scripts/open-pr.sh

build:
	npm run build
