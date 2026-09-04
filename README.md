# SAMJH - The Indian Social Intelligence Game

SAMJH is a mobile-first quiz game about awkward, funny, recognizable Indian social situations. It is built for the loop: play, laugh, get scored, discover a persona, share, challenge a friend, replay.

SAMJH is entertainment and education. It is not a psychological, clinical, medical, or diagnostic assessment.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL printed by Next.js.

## Architecture

- `app/` contains App Router routes: landing, character selection, quiz, results, and challenge pages.
- `components/` contains reusable UI, game, result, and share-card components.
- `data/` contains character and scenario content.
- `types/` contains the reusable game data model.
- `lib/scoring/` contains deterministic score aggregation, normalization, Social IQ, and challenge comparison.
- `lib/personas/` contains deterministic persona rules.
- `lib/share.ts` contains share and challenge-link helpers.
- `lib/analytics.ts` is a provider-free analytics abstraction ready for PostHog, Plausible, or another provider later.

## Add a character

Add a new entry to `data/characters.ts` with a unique `id`, name, emoji, tagline, topics, and accent.

## Add questions

Add `Scenario` objects to `data/scenarios.ts` using the same `characterId`. Each response carries score changes across:

- `socialAwareness`
- `boundaries`
- `empathy`
- `sarcasm`
- `assertiveness`
- `escalationRisk`

Core quiz logic does not need to change when new content is added.

## Scoring

The scoring module aggregates selected response scores, normalizes each dimension to `0-100`, and calculates Social IQ from constructive dimensions with a small penalty for escalation risk.

## Personas

`lib/personas/personas.ts` picks personas deterministically from score combinations. Examples include Boundary Boss, Peacekeeper, Chaos Consultant, People Pleaser, Human HR Department, Silent Escapist, and Diplomatic Menace.

## Challenge links

Challenge URLs encode score and persona in the path, for example:

```text
/challenge/87-diplomatic-menace
```

No database is required for the MVP. Challenge state is stored in session storage while the player takes their quiz.

## Deploy to Vercel

Push the repository to GitHub and import it in Vercel. Use the default Next.js settings. No environment variables, database, authentication, or server setup is required.

## Not in V1

No login, subscriptions, payments, AI chatbot, LLM scoring, feeds, messaging, multiplayer rooms, native app, CMS, admin dashboard, clinical assessment, or therapy functionality.
