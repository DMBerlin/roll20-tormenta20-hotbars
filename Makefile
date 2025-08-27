dev:
	make lint && make spells && make potions && make build && pnpm dev

lint:
	pnpm lint

spells:
	pnpm generate-spells-data

potions:
	pnpm generate-potions-data

build:
	pnpm build