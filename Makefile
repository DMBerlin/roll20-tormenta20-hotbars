dev:
	pnpm lint && pnpm generate-spells-data && pnpm build && pnpm dev

build:
	pnpm lint && pnpm build

lint:
	pnpm lint