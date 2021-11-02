start:
	docker run --rm -it -v $(shell pwd):/app -w /app --name boilerplate -p 9000:9000 node:16 npm run start

build:
	docker run --rm -it -v $(shell pwd):/app -w /app --name boilerplate -p 9000:9000 node:16 npm run build

install:
	docker run --rm -it -v $(shell pwd):/app -w /app --name boilerplate -p 9000:9000 node:16  npm install -D $(PKG)
