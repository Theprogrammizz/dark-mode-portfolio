

# Visual Enhancement Plan for Your Portfolio

Here's a set of visual upgrades that will make the site feel more polished, dynamic, and impressive -- while keeping the clean dark aesthetic you already have.

---

## 1. Animated Gradient Glow Behind Project Cards

When you hover a project card, a soft amber/primary-colored glow follows your cursor behind the card border. This is the popular "border beam" / "spotlight card" effect seen on premium portfolios.

---

## 2. Smooth Number Counter for Experience Stats

Instead of "5+ years" just appearing, animate the number counting up (0 -> 5+) when it scrolls into view. Add additional stats like "10+ Projects" and "3+ Companies" in a row with the same effect.

---

## 3. Animated Skill Tags (Marquee/Ticker)

Replace the static skill text with a horizontally scrolling marquee of skill badges -- two rows moving in opposite directions. This adds constant subtle motion and looks very modern.

---

## 4. Floating Particles / Ambient Dots in Background

Add subtle floating ambient dots/particles across the full page background (not just the hero) that slowly drift, giving depth and life to the dark canvas.

---

## 5. Section Dividers with Animated Lines

Replace the plain border between sections with a horizontal line that draws itself in (animates width from 0 to 100%) as you scroll to it, with a gradient from transparent to primary to transparent.

---

## 6. Contact Section -- Glowing CTA Button

Make the "Get in touch" button pulse with a soft amber glow/ring animation to draw attention as the final call to action.

---

## 7. Scroll Progress Indicator

Add a thin amber progress bar fixed to the top of the page that fills as you scroll down, showing how far through the page you are.

---

## Technical Details

### Files to create:
- `src/components/SpotlightCard.tsx` -- reusable hover-glow card wrapper
- `src/components/SkillMarquee.tsx` -- auto-scrolling skill ticker component
- `src/components/FloatingParticles.tsx` -- ambient background particles
- `src/components/AnimatedCounter.tsx` -- counting number animation
- `src/components/ScrollProgress.tsx` -- top scroll progress bar

### Files to modify:
- `src/pages/Index.tsx` -- add ScrollProgress and FloatingParticles
- `src/components/ProjectsSection.tsx` -- wrap cards in SpotlightCard
- `src/components/AboutSection.tsx` -- replace skill text with SkillMarquee
- `src/components/ExperienceSection.tsx` -- add AnimatedCounter stats row
- `src/components/ContactSection.tsx` -- add glow pulse to CTA button
- `src/index.css` -- add marquee keyframes, glow pulse animation
- `tailwind.config.ts` -- add new keyframes (marquee, glow-pulse)

### No new dependencies needed
All effects built with pure CSS animations, Intersection Observer, and React state -- no external animation libraries required.

