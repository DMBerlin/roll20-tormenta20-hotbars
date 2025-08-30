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

update-version:
	pnpm update-version

preview:
	make update-version
	make lint
	make build
	make dev