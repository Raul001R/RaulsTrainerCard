# Raul's Trainer Card

A Pokémon trainer card themed portfolio page. It introduces me, shows my projects as Pokédex entries and explains why I joined Knight Hacks.

**Live:** (https://rauls-trainer-card.vercel.app/)

I first built this page as my application to the Knight Hacks Dev Team inside their `forge` monorepo. I later pulled it out into this standalone app so it can be hosted on its own.

## Features

- **Intro video** with a poster image and a 15 second fallback so the page still loads if the video stalls
- **Reduced motion support** that reads the system setting with `useSyncExternalStore` and skips the intro animation
- **Trainer card** built from a data array instead of hardcoded markup
- **Pokédex section** that renders each project from a list with `.map()`
- **Pixel font** and a dark theme built on design tokens instead of hardcoded colors

## Tech Stack

- [Next.js](https://nextjs.org) 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS v4
- [shadcn/ui](https://ui.shadcn.com) components (Badge, Button, Card) built on Radix
- Radix Icons
- Deployed on [Vercel](https://vercel.com)

## Moving It Out of Forge

The page only imported three components from forge. Getting it to run on its own took more than that. These are the hidden dependencies I had to find and replace:

| Dependency | In forge | In this app |
|---|---|---|
| UI components | `@forge/ui` shared package | Copied into `components/ui/` |
| `cn()` class helper | `@forge/ui` | `lib/utils.ts` |
| `Slot` for `asChild` buttons | Installed in forge | Added `@radix-ui/react-slot` |
| Dark mode | `ThemeProvider` with `attribute="class"` | `className="dark"` on `<html>` |
| Color tokens | Bare HSL values wrapped by `tailwind.config.ts` | Full `hsl()` values read by `@theme` |
| GitHub and LinkedIn icons | `lucide-react` 0.x | `@radix-ui/react-icons` since Lucide 1.x removed brand icons |

Nothing errored when these were wrong. The page just looked different. Tracing each one taught me more about how the app fits together than building the page did.

## Running Locally

You need Node.js 20 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000).

To check a production build:

```bash
pnpm lint
pnpm build
```

## Project Structure

```
app/
  layout.tsx      Root layout: html, body, metadata and the dark class
  page.tsx        The trainer card page
  globals.css     Tailwind setup and color tokens
components/ui/    Badge, Button and Card
lib/utils.ts      cn() class name helper
public/           Video, images and the pixel font
```

## Credits

- UI components and color tokens adapted from [Knight Hacks forge](https://github.com/KnightHacks/forge)
- Pokémon is a trademark of Nintendo, Creatures and Game Freak. This is a personal fan project and is not affiliated with them.

## Author

Raul Rodriguez · [GitHub](https://github.com/Raul001R)