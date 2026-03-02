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

### Palette B — "Golden Trail Edition" (Alternative)

A warmer, bolder palette built around Badgepack's actual UI color `#FFB902`. Amber Sun is the brand face, Amber Deep drives action, and Royal Blue is a quiet support for small text.

| Role | Name | Hex | Usage |
| --- | --- | --- | --- |
| **Brand** | Amber Sun | `#FFB902` | Logo, hero backgrounds, CTA button default, badge fills, brand blocks |
| **Action** | Amber Deep | `#B8960C` | CTA hover, headings, active icons/text, card border hover |
| **Action Pressed** | Dark Amber | `#8A7209` | Button pressed/active state, deep hover |
| **Action Support** | Royal Blue | `#2563EB` | Inline links, secondary buttons, small readable text |
| **Dark** | Deep Navy | `#1E2A4A` | Body text, default menu text, form labels, clickable items |
| **Secondary** | Warm Gray | `#6B7280` | Helper text, default icons, descriptions, captions |
| **Muted** | Slate | `#94A3B8` | Placeholder text, disabled states, connector lines only |
| **Success** | Mint Fresh | `#34D399` | Checkmarks, "earned" states, completed steps |
| **Neutral Light** | Warm Cloud | `#FFFDF5` | Page background — warm undertone to complement Gold |
| **Surface Hover** | Gold Tint 5% | `#FFFAE5` | Menu hover bg, ghost button hover bg |
| **Surface Active** | Gold Tint 15% | `#FFF5CC` | Menu active bg, card selected bg |

### Palette B Usage Rules

- Amber Sun `#FFB902` is the **brand color** — logo, hero sections, CTA button default, badge fills
- Amber Deep `#B8960C` is the **action color** — hover of CTA, headings, active menu text/icons
- Dark Amber `#8A7209` is the **pressed state** — button click, deep interactive feedback
- Royal Blue `#2563EB` is the **support color** — inline link text and secondary actions only
- Deep Navy `#1E2A4A` is the **default text** — body text, menu items, form labels, anything clickable
- Warm Gray `#6B7280` is the **secondary text** — helper text, descriptions, default icons, captions
- Slate `#94A3B8` is **muted only** — placeholder text, disabled states, connector lines (NEVER for clickable items or readable text)
- Never use Amber Sun `#FFB902` as text or small UI elements on light backgrounds (contrast ~2.1:1 ❌)
- Warm Cloud `#FFFDF5` replaces pure white to create a cohesive warm tone
- No Coral in this palette — Gold family dominates, Blue supports quietly

**Text hierarchy:** Deep Navy (clickable/primary) -> Warm Gray (readable/secondary) -> Slate (muted/disabled only)

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

**Important:** CTA buttons with Amber Sun `#FFB902` background should use **Deep Navy `#1E2A4A` text** instead of white for best contrast. White on `#FFB902` is only ~2.1:1 which fails all levels.

### Palette B — Icons

| State | Color | Notes |
| --- | --- | --- |
| Default (inactive) | Warm Gray `#6B7280` | Visible but not dominant — clearly clickable |
| Hover | Deep Navy `#1E2A4A` | Darkens to signal interactivity |
| Active (current page) | Amber Deep `#B8960C` | Brand color signals "you are here" |

Never use Amber Sun `#FFB902` for icons — thin strokes + bright color on light background = invisible.  
Never use Slate `#94A3B8` for clickable icons — too light, looks disabled.

### Palette B — Sidebar Menu States

| State | Text | Icon | Background | Border-left |
| --- | --- | --- | --- | --- |
| Default | Deep Navy `#1E2A4A` | Warm Gray `#6B7280` | transparent | none |
| Hover | Deep Navy `#1E2A4A` | Deep Navy `#1E2A4A` | Gold Tint 5% `#FFFAE5` | none |
| Active | Amber Deep `#B8960C` | Amber Deep `#B8960C` | Gold Tint 15% `#FFF5CC` | Amber Sun `#FFB902` 3px solid |

### Palette B — Button States

| Type | Default | Hover | Pressed |
| --- | --- | --- | --- |
| **Primary CTA** | `#FFB902` bg + `#1E2A4A` text | `#B8960C` bg + white text | `#8A7209` bg + white text |
| **Secondary** | `#2563EB` outline + transparent bg | `#2563EB` filled + white text | `#1E40AF` filled + white text |
| **Ghost / Text** | Amber Deep `#B8960C` text | `#8A7209` text + `#FFFAE5` bg | `#8A7209` text + `#FFF5CC` bg |
| **Danger** | `#EF4444` outline | `#EF4444` filled + white text | `#DC2626` filled + white text |

Primary CTA flows through the Gold family: Amber Sun -> Amber Deep -> Dark Amber. Clear feedback at every step.

### Palette B — Card States

| State | Border | Background | Shadow |
| --- | --- | --- | --- |
| Default | Warm Gray `#6B7280` 1px | White | none |
| Hover | Amber Deep `#B8960C` 1px | `#FFFAE5` | `0 2px 8px rgba(255,185,2,0.1)` |
| Selected | Amber Sun `#FFB902` 2px | `#FFF5CC` | `0 2px 12px rgba(255,185,2,0.15)` |

### Palette B — Step Indicator

| State | Circle | Text | Connector Line |
| --- | --- | --- | --- |
| Completed | Mint Fresh `#34D399` bg + white ✓ | Warm Gray `#6B7280` | Mint Fresh `#34D399` |
| Current | Amber Sun `#FFB902` bg + Deep Navy number | Amber Deep `#B8960C` bold | Warm Gray `#6B7280` |
| Upcoming | Warm Gray `#6B7280` outline | Warm Gray `#6B7280` | Slate `#94A3B8` |

### Palette B — Hover Philosophy

Gold family elements darken within their family (Amber Sun -> Amber Deep -> Dark Amber). Blue elements transition toward Gold on hover. This creates a "conversation" between the two colors — Blue leads you in, Gold rewards the interaction.

**Quick reference:**

| Rule | Color |
| --- | --- |
| Big and bold -> | Amber Deep `#B8960C` |
| Small and must-read -> | Royal Blue `#2563EB` |
| "Do something" -> | Amber Sun / Amber Deep |
| "You did it" -> | Amber Sun `#FFB902` + Mint Fresh `#34D399` |
| Subtle hover background -> | Gold Tint 5% `#FFFAE5` |
| Active/selected background -> | Gold Tint 15% `#FFF5CC` |

### Palette B Vibe

- Feels: warm, bold, premium, adventurous
- Similar to: Bumble, National Geographic, CAT
- Best for: if Badgepack wants to lean harder into the adventure/campfire identity with a Gold-dominant visual language

### When to Choose Which Palette

- **Palette A (Trail Blue lead):** safer, more SaaS-conventional, works for tech-savvy audience, scales cleanly to enterprise
- **Palette B (Amber Sun lead):** more distinctive, stronger adventure identity, premium feel, matches current UI, stands out from every competitor, but requires Deep Navy text on Gold buttons instead of white

---

## 12. UI Implementation Guide (Palette B)

Practical design notes for implementing Palette B in the Badgepack dashboard. Based on a review of the current UI, these are specific adjustments to ensure every element follows the Brand Visual DNA consistently.

### Sidebar Navigation

| Element | Current | Recommended | Spec |
| --- | --- | --- | --- |
| Active menu item | All items look the same, no clear active state | Add visible active state | Text: Amber Deep `#B8960C`, Icon: Amber Deep `#B8960C`, Bg: `#FFF5CC`, Border-left: `#FFB902` 3px solid |
| Menu hover | No visible hover feedback | Add subtle Gold hover | Bg: `#FFFAE5`, Icon: Deep Navy `#1E2A4A` |
| Default menu text | Slate (too light, looks inactive) | Deep Navy for clickable items | Deep Navy `#1E2A4A` — clearly reads as clickable |
| Default menu icon | Slate (looks disabled) | Warm Gray for visible but quiet | Warm Gray `#6B7280` — visible, not dominant |

### Text Colors

| Element | Current | Recommended | Spec |
| --- | --- | --- | --- |
| Page heading ("Create Badge") | Black `#000000` | Soften to Deep Navy | Deep Navy `#1E2A4A` — warmer, less harsh |
| Body / description text | Black `#000000` | Soften to Deep Navy | Deep Navy `#1E2A4A` |
| Section heading ("Badge Identity") | Black bold | Amber Deep or Deep Navy | Amber Deep `#B8960C` bold for section headers, or Deep Navy `#1E2A4A` bold if Gold feels too much |
| Form labels ("Badge Name") | Black | Deep Navy | Deep Navy `#1E2A4A` Medium (500) |
| Placeholder text | Light gray | Slate (muted) | Slate `#94A3B8` — only for placeholder, not real content |
| Helper text ("Choose a clear name...") | Gray | Warm Gray | Warm Gray `#6B7280` — readable secondary text |
| Required asterisk * | Red | Keep red/danger | `#EF4444` — must be visible |

### Links & Actions

| Element | Current | Recommended | Spec |
| --- | --- | --- | --- |
| "SHARE PREVIEW" link | Gold/Amber tone | Royal Blue for small text links | Royal Blue `#2563EB` — small text needs higher contrast |
| "Upgrade for unlimited →" | Gold/Amber tone | Royal Blue to stand out from Gold surroundings | Royal Blue `#2563EB` — creates contrast against Gold-heavy page, draws attention |
| "View plans >" | Gold tone | Royal Blue | Royal Blue `#2563EB` |
| "Auto-updating" status | Green | Mint Fresh | Mint Fresh `#34D399` — align with palette |
| "< Back" link | Gray | Ghost button style | Amber Deep `#B8960C` text, hover: `#8A7209` + `#FFFAE5` bg |

### Buttons

| Element | Current | Recommended | Spec |
| --- | --- | --- | --- |
| "New Badge" (primary CTA) | `#FFB902` bg + white text | Change text to Deep Navy | `#FFB902` bg + `#1E2A4A` text — white on Gold fails contrast |
| "Continue >" | Gold bg + white text | Change text to Deep Navy | `#FFB902` bg + `#1E2A4A` text |
| "Save Draft" | Plain text | Ghost button | Amber Deep `#B8960C` text, hover: `#8A7209` text + `#FFFAE5` bg |

### Step Indicator

| Element | Current | Recommended | Spec |
| --- | --- | --- | --- |
| Completed step (Step 1) | Green circle + amber text | Mint Fresh circle + Warm Gray text | Circle: Mint Fresh `#34D399` bg + white ✓, Text: Warm Gray `#6B7280` |
| Current step (Step 2) | — | Amber Sun circle + Amber Deep text | Circle: `#FFB902` bg + `#1E2A4A` number, Text: `#B8960C` bold |
| Upcoming steps | Gray circle + gray text | Warm Gray outline + Warm Gray text | Circle: Warm Gray `#6B7280` outline, Text: Warm Gray `#6B7280` |
| Connector lines | Not visible enough | Add Warm Gray lines between steps | Warm Gray `#6B7280` 2px line connecting circles |
| Step icons | Inside circles | Keep — adds clarity to each step's purpose | Match circle color (white icon on colored bg, Slate icon on outline) |

### Cards & Panels

| Element | Current | Recommended | Spec |
| --- | --- | --- | --- |
| Form card border | Light gray | Warm Gray 1px, Gold on hover | Default: Warm Gray `#6B7280` 1px, Hover: Amber Deep `#B8960C` 1px |
| Live Preview panel border | Amber/Gold | Amber Sun for selected panel feel | `#FFB902` 2px border, bg: `#FFF5CC` |
| Badge image upload (dashed circle) | Gold dashed | Keep — looks good | Amber Sun `#FFB902` dashed 2px |
| Selected option card (e.g. Manual Approval) | Gold border + cream bg | Match card selected state | Border: `#FFB902` 2px, Bg: `#FFF5CC`, Shadow: `0 2px 12px rgba(255,185,2,0.15)` |

### Badge Purpose Cards (Completion, Achievement, Participation, Skill-based)

| Element | Current | Recommended | Spec |
| --- | --- | --- | --- |
| Unselected — title | Slate (looks disabled) | Deep Navy | Deep Navy `#1E2A4A` — clearly readable and clickable |
| Unselected — description | Slate (looks disabled) | Warm Gray | Warm Gray `#6B7280` — secondary but readable |
| Unselected — icon | Slate (barely visible) | Warm Gray | Warm Gray `#6B7280` — visible, not dominant |
| Unselected — border | Slate 1px | Warm Gray 1px | Warm Gray `#6B7280` 1px |
| Unselected — hover border | — | Amber Deep | Amber Deep `#B8960C` 1px + bg `#FFFAE5` |
| Selected — title | Dark | Deep Navy | Deep Navy `#1E2A4A` bold |
| Selected — icon | Amber | Amber Deep | Amber Deep `#B8960C` |
| Selected — border | Gold | Amber Sun 2px | `#FFB902` 2px + bg `#FFF5CC` |
| Selected — checkmark | Gold circle | Amber Sun circle + white ✓ | `#FFB902` bg + white check icon |

### Backgrounds

| Element | Current | Recommended | Spec |
| --- | --- | --- | --- |
| Main content area | White | Warm Cloud | `#FFFDF5` — subtle warm tone |
| Sidebar background | Light cream/yellow | Gold Tint 5% | `#FFFAE5` — slightly warmer than content area to create depth |
| Form card background | White | White or Warm Cloud | Keep white for contrast against Warm Cloud page bg |

### Free Plan / Usage Indicator

| Element | Current | Recommended | Spec |
| --- | --- | --- | --- |
| "Free Plan" label | Gold/Amber text | Amber Deep | `#B8960C` text + sparkle icon in `#FFB902` |
| "0 of 5 badges used" | Gray | Warm Gray | Warm Gray `#6B7280` — readable, not washed out |
| Progress bar (if added) | — | Gold fill on Warm Gray track | Fill: `#FFB902`, Track: Warm Gray `#6B7280` at 30% opacity |

### Spacing & Radius (General)

| Property | Value | Notes |
| --- | --- | --- |
| Border radius (cards, buttons, inputs) | 12px | Rounded but not pill-shaped — brand-defining rule |
| Border radius (badges, avatars) | Full circle | 50% / fully rounded |
| Input field height | 44px minimum | Touch-friendly for all devices |
| Sidebar width | 240px | Enough room for icons + labels |
| Content max-width | 960px | Prevents lines from getting too wide |
| Card padding | 24px | Comfortable breathing room |
| Section gap | 32px | Clear separation between sections |

---
