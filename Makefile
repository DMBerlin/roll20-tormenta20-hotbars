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
	pnpm update-version && pnpm lint && pnpm build && pnpm dev