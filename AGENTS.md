## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Code Style

### Import order

Imports should be ordered as follows, with a blank line between each group:

1. 표준 라이브러리 (Standard library)
2. 외부 라이브러리 (External libraries)
3. 절대 경로 (Absolute paths) — use the `@/*` path alias instead of relative imports where possible (e.g. `@/components/Button.astro` instead of `../../components/Button.astro`)
4. 상대 경로 (Relative paths)
5. 타입 정의 (Type definitions)
6. 스타일 및 정적 자원 (Styles and static assets)

### Keep implementations simple

Avoid over-engineering. Implement the simplest solution that satisfies the requirement — don't add abstractions, configuration options, or extensibility that isn't needed yet.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
