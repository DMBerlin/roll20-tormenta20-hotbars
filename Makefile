dev:
	pnpm dev

lint:
	pnpm lint

spells:
	pnpm generate-spells-data

potions:
	pnpm generate-potions-data

build:
	pnpm build

preview:
	pnpm lint && pnpm build && pnpm dev