---
status: accepted
---

# Keep details as TSX modules built by defineDetailKind

Each case study and expertise is a `.tsx` module. `defineDetailKind` collects one detail kind's modules into its pages, cards and navigation. We do not use Astro content collections. Every detail's description is JSX, so a collection would force all of them into MDX. Nine details gain nothing from a collection's schema validation or querying, because `defineDetailKind` and its tests already cover slugs, ordering and file references.

## Considered Options

- **Astro content collections.** Rejected: it means an MDX migration of every description, plus a second build-time data layer, to manage nine entries.
- **Keep two plain arrays and add a kind field to each detail.** Rejected: the route and R2 folder would stay split across per-kind utility files, which is the scatter `defineDetailKind` removes.

## Consequences

- Reconsider collections if India needs to edit content without touching TypeScript, or if the number of details grows enough that querying pays off.
