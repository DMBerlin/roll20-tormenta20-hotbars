dev:
	make lint && make spells && make potions && make build && make run-dev

run-dev:
	pnpm dev

lint:
	pnpm lint

spells:
	pnpm generate-spells-data

potions:
	pnpm generate-potions-data

build:
	pnpm build

plugin:
	pnpm build-plugin