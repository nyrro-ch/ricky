start:
	docker run --rm -it -v $(shell pwd):/app -w /app --name boilerplate -p 9000:9000 node:16 npm run start

node:
	docker run --rm -it -v $(shell pwd):/app -w /app --name backend -p 3000:3000 node:16 npm run backend:dev

build:
	docker run --rm -it -v $(shell pwd):/app -w /app --name build -p 9000:9000 node:16 npm run build

install_all:
	docker run --rm -it -v $(shell pwd):/app -w /app --name install node:16  npm install

install_dev:
	docker run --rm -it -v $(shell pwd):/app -w /app --name install -p 9000:9000 node:16  npm install -D $(PKG)

install:
	docker run --rm -it -v $(shell pwd):/app -w /app --name install node:16  npm install $(PKG)
