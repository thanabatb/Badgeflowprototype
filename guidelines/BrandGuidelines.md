# BadgeFlow Brand Guidelines

## Brand Palette

| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| Primary | Trail Blue | `#4F6DF5` | CTAs, logo, headings, links |
| Primary Dark | Deep Ink | `#1E2A4A` | Body text, dark backgrounds |
| Accent | Spark Coral | `#FF6B6B` | Hover states, notifications, CTA highlights |
| Secondary | Mint Fresh | `#34D399` | Success states, checkmarks, "earned" indicators |
| Neutral Light | Cloud | `#F5F7FA` | Page backgrounds, card fills |
| Neutral Mid | Slate | `#94A3B8` | Captions, secondary text, borders |
| Achievement | Campfire Gold | `#FBBF24` | Badge earned, stars, premium tier, active tabs on dark bg, Campfire dashboard accents |

## Usage Rules

- Trail Blue is the hero. Use it for 60% of brand-colored elements.
- Deep Ink for all body text (never pure black `#000`).
- Cloud is the default background, not white, slightly warm.
- Always pair Trail Blue + Cloud for the safest, most on-brand combo.
- Never place Coral text on blue backgrounds (accessibility fail).

## Spark Coral vs. Campfire Gold

These two accent colors work as a pair. Coral grabs attention. Gold celebrates achievement.

### Spark Coral - the action color

- Hover states and interactive feedback (buttons, links)
- Notification dots and unread indicators
- CTA button highlights and urgent callouts
- Any element on light backgrounds that must be instantly visible
- Contrast ratio on Cloud: ~3.2:1 (passes AA for UI elements)

### Campfire Gold - the reward color

- Badge earned moments and achievement unlocks
- Star ratings and premium tier indicators
- Active and selected tab on Deep Ink backgrounds
- Campfire dashboard accent elements
- Quest completion and Challenge passed states
- Contrast ratio on Cloud: ~1.6:1 (do NOT use for text or UI on light backgrounds)
- Contrast ratio on Deep Ink: ~8.5:1 (excellent, use freely on dark backgrounds)

Rule of thumb: If it says "do something", use Coral. If it says "you did it", use Gold.

## UI Mapping (Quick Reference)

- Primary button: `Trail Blue` background + white text, Coral on hover.
- Secondary and outline button: Cloud or white surface + Slate border + Deep Ink text.
- Success chips, toasts, and check states: Mint Fresh.
- Notification and urgency emphasis: Coral.
- Achievement and reward emphasis on dark surfaces: Campfire Gold.
- Default canvas and card background: Cloud.

## Palette B - Golden Trail Edition (Alternative)

A warmer, bolder palette built around Badgepack's actual UI color `#FFB902`. Amber Sun is the brand face, Amber Deep drives action, and Royal Blue is a quiet support for small text.

| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| Brand | Amber Sun | `#FFB902` | Logo, hero backgrounds, CTA button default, badge fills, brand blocks |
| Action | Amber Deep | `#B8960C` | CTA buttons, headings, large UI elements |
| Action Pressed | Dark Amber | `#8A7209` | Button pressed and active state, deep hover |
| Action Support | Royal Blue | `#2563EB` | Inline links, secondary buttons, small readable text |
| Dark | Deep Navy | `#1E2A4A` | Body text, dark backgrounds |
| Success | Mint Fresh | `#34D399` | Checkmarks, "earned" states |
| Neutral Light | Warm Cloud | `#FFFDF5` | Page background with warm undertone to complement Gold |
| Neutral Mid | Slate | `#94A3B8` | Captions, borders, secondary text |
| Surface Hover | Gold Tint 5% | `#FFFAE5` | Menu hover background, ghost button hover background |
| Surface Active | Gold Tint 15% | `#FFF5CC` | Menu active background, card selected background |

### Palette B Usage Rules

- Amber Sun `#FFB902` is the brand color - logo, hero sections, CTA button default, badge fills.
- Amber Deep `#B8960C` is the action color - CTA hover, headings, active menu text and icons.
- Dark Amber `#8A7209` is the pressed state - button click, deep interactive feedback.
- Royal Blue `#2563EB` is the support color - inline link text and secondary actions only.
- Never use Amber Sun `#FFB902` as text or small UI elements on light backgrounds (contrast ~2.1:1).
- Warm Cloud `#FFFDF5` replaces pure white for a cohesive warm tone.
- No Coral in this palette — Gold family dominates, Blue supports quietly.

### Palette B Contrast Reference

| Pair | Ratio | Normal Text (4.5:1) | Large Text (3:1) | UI Elements (3:1) |
| --- | --- | --- | --- | --- |
| Amber Sun on White | ~2.1:1 | ❌ | ❌ | ❌ |
| Amber Sun on Deep Navy | ~7.8:1 | ✅ | ✅ | ✅ |
| Amber Deep on White | ~3.6:1 | ❌ | ✅ | ✅ |
| Amber Deep on Warm Cloud | ~3.4:1 | ❌ | ✅ | ✅ |
| Amber Deep on Deep Navy | ~5.1:1 | ✅ | ✅ | ✅ |
| White on Amber Sun (button) | ~2.1:1 | ❌ | ❌ | ❌ |
| Deep Navy on Amber Sun (button) | ~7.8:1 | ✅ | ✅ | ✅ |
| Royal Blue on Warm Cloud | ~4.3:1 | ✅ | ✅ | ✅ |

Important: CTA buttons with Amber Sun `#FFB902` background should use Deep Navy `#1E2A4A` text instead of white for best contrast.

### Palette B - Icons

| State | Color | Notes |
| --- | --- | --- |
| Default (inactive) | Slate `#94A3B8` | Quiet, does not compete with content |
| Hover | Deep Navy `#1E2A4A` | Darkens to signal interactivity |
| Active (current page) | Amber Deep `#B8960C` | Brand color signals active location |

Never use Amber Sun `#FFB902` for icons — thin strokes plus bright color on light background reduce visibility.

### Palette B - Sidebar Menu States

| State | Text | Icon | Background | Border-left |
| --- | --- | --- | --- | --- |
| Default | Deep Navy `#1E2A4A` | Slate `#94A3B8` | transparent | none |
| Hover | Deep Navy `#1E2A4A` | Deep Navy `#1E2A4A` | Gold Tint 5% `#FFFAE5` | none |
| Active | Amber Deep `#B8960C` | Amber Deep `#B8960C` | Gold Tint 15% `#FFF5CC` | Amber Sun `#FFB902` 3px solid |

### Palette B - Button States

| Type | Default | Hover | Pressed |
| --- | --- | --- | --- |
| Primary CTA | `#FFB902` background + `#1E2A4A` text | `#B8960C` background + white text | `#8A7209` background + white text |
| Secondary | `#2563EB` outline + transparent background | `#2563EB` filled + white text | `#1E40AF` filled + white text |
| Ghost / Text | Amber Deep `#B8960C` text | `#8A7209` text + `#FFFAE5` background | `#8A7209` text + `#FFF5CC` background |
| Danger | `#EF4444` outline | `#EF4444` filled + white text | `#DC2626` filled + white text |

Primary CTA flows through the Gold family: Amber Sun -> Amber Deep -> Dark Amber.

### Palette B - Card States

| State | Border | Background | Shadow |
| --- | --- | --- | --- |
| Default | Slate `#94A3B8` 1px | White | none |
| Hover | Amber Deep `#B8960C` 1px | `#FFFAE5` | `0 2px 8px rgba(255,185,2,0.1)` |
| Selected | Amber Sun `#FFB902` 2px | `#FFF5CC` | `0 2px 12px rgba(255,185,2,0.15)` |

### Palette B - Step Indicator

| State | Circle | Text | Connector Line |
| --- | --- | --- | --- |
| Completed | Mint Fresh `#34D399` background + white check | Slate `#94A3B8` | Mint Fresh `#34D399` |
| Current | Amber Sun `#FFB902` background + Deep Navy number | Amber Deep `#B8960C` bold | Slate `#94A3B8` |
| Upcoming | Slate `#94A3B8` outline | Slate `#94A3B8` | Slate `#94A3B8` |

### Palette B - When to Use Amber Deep vs. Royal Blue

#### Amber Deep `#B8960C` - the Gold action color

- CTA buttons with white text (large and bold text)
- Page headings (28px+ and bold)
- Large icon buttons and interactive cards
- Hover state on dark backgrounds
- Rule: anything big and clickable

#### Royal Blue `#2563EB` - the support color

- Inline link text within paragraphs (16px body text needs 4.5:1)
- Secondary action buttons and text links
- Small UI text that must be readable
- Rule: anything small and must be readable

Rule of thumb: Big and bold -> Amber Deep. Small and must-read -> Royal Blue.

### Palette B - Hover Philosophy

Gold family elements darken within their family (Amber Sun -> Amber Deep -> Dark Amber). Blue elements transition toward Gold on hover. This creates a conversation between the two colors — Blue leads you in, Gold rewards the interaction.

Quick reference:

| Rule | Color |
| --- | --- |
| Big and bold -> | Amber Deep `#B8960C` |
| Small and must-read -> | Royal Blue `#2563EB` |
| Do something -> | Amber Sun / Amber Deep |
| You did it -> | Amber Sun `#FFB902` + Mint Fresh `#34D399` |
| Subtle hover background -> | Gold Tint 5% `#FFFAE5` |
| Active and selected background -> | Gold Tint 15% `#FFF5CC` |

### Palette B Vibe

- Feels: warm, bold, premium, adventurous.
- Similar to: Bumble, National Geographic, CAT.
- Best for: if Badgepack wants to lean harder into the adventure/campfire identity with a Gold-dominant visual language.

## When to Choose Which Palette

- Palette A (Trail Blue lead): safer, more SaaS-conventional, works for tech-savvy audience, scales cleanly to enterprise.
- Palette B (Amber Sun lead): more distinctive, stronger adventure identity, premium feel, matches current UI, stands out from every competitor, but requires Deep Navy text on Gold buttons instead of white.
