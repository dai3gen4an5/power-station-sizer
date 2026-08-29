# CLAUDE.md — Power Station Sizer

Permanent project rules for Claude Code sessions working in this repository. Read this file in full
before starting any task.

## Repository Safety

This project must always be edited directly in the real repository:

```
D:\power-station-sizer
```

Before any task:

1. Confirm the current working directory.
2. Confirm `.git` exists.
3. Run `git status`.
4. If there are unexpected existing changes, **STOP** and report them instead of overwriting anything.

Never work from a reconstructed sandbox copy when Claude Code has access to the real repository.
Never package a ZIP as the normal workflow.

## Files That Must Never Be Lost

Preserve:

```
public/google6ab697511daae61e.html
```

Never delete or overwrite it.

## Development Architecture

Reuse existing:

- `PowerStationCalculator`
- `lib/calculator/*`
- `FaqSection`
- `RelatedCalculators`
- `SITE_URL` / `absoluteUrl()`
- shared styles/layout

Never duplicate calculator math.

Never hard-code:

- `powerstationsizer.com`
- `power-station-sizer.vercel.app`

All production URLs must derive from `lib/site.ts`.

## SEO / Auto-Discovery

Every new calculator page must:

1. Have unique metadata.
2. Have a canonical relative URL.
3. Be included in `app/sitemap.ts` via `absoluteUrl()`.
4. Be linked from `RelatedCalculators` on the homepage.
5. Have at least one natural crawlable internal link from a relevant existing page when appropriate.
6. Link naturally back to the main calculator.
7. Use ordinary Next.js `Link` / HTML anchor links.
8. Never add `noindex`.
9. Never block the page in `robots.txt`.
10. Use `SITE_URL` / `absoluteUrl()` for structured-data URLs.

This is designed so Google can discover pages without relying on manual Search Console indexing
requests.

## Verify Before Release

After implementation, automatically run:

```
npm run lint
npm run build
```

Do not release if either fails.

From the build output, confirm:

- the new route exists
- it is marked `○ Static`
- all previous routes still build

Also verify:

- sitemap contains every intended calculator exactly once
- no hard-coded production hostname exists
- `public/google6ab697511daae61e.html` still exists

## Git Safety

After successful verification:

1. Run `git status`.
2. Review every changed and untracked file.
3. Do NOT use `git add .` blindly.
4. Stage only files intentionally changed for the task.
5. If an unexplained file exists (like a previous accidental "h" file), STOP and report it.
6. Show the staged file list before committing.
7. Commit with a concise, descriptive message.
8. Push to `origin main`.

Never commit:

- temporary files
- test scratch files
- generated ZIPs
- accidental command output
- secrets
- `.env` files

## Post-Push Reporting

After push, report:

- commit hash
- route added
- files changed
- lint result
- build result
- static-generation result
- sitemap route list
- push result

Do not claim Vercel deployment succeeded unless it was actually verified.

## Default Behavior

For future calculator-page requests (e.g. "Create the next calculator page: /some-page"), perform the
whole workflow automatically:

```
inspect → implement → lint → build → verify → inspect git diff/status
→ stage only intended files → commit → push
```

Only stop for user input if:

- tests/build fail and cannot be repaired
- unexpected existing repository changes are present
- an unexplained file would be committed
- the task requires a product/content decision that cannot safely be inferred
