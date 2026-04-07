# Sree Alok Chandro - Portfolio Website

A modern, animated personal portfolio built with Next.js, React, TypeScript, and Tailwind CSS. This project presents my background, skills, projects, technologies, and contact details in a clean single-page experience with smooth motion and a bold visual style.

## Overview

This portfolio is designed to highlight who I am as a developer and what I build. It includes dedicated sections for:

- Hero introduction
- About me
- Skills
- Experience
- Why choose me
- Projects
- Technologies and tools
- Contact information

The design focuses on a dark premium aesthetic, glassmorphism cards, animated backgrounds, and responsive layouts that look good on desktop and mobile.

## Features

- Responsive single-page layout
- Animated hero section with motion effects
- Smooth navigation between sections
- About section with profile details and CV download button
- Skills and strengths cards
- Project showcase with images and GitHub links
- Technologies and tools section
- Contact section with social links and contact details
- Modern UI components built with Radix UI and custom reusable components

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Radix UI
- Lucide React
- Tabler Icons
- next-themes
- Recharts

## Project Structure

```bash
app/
	layout.tsx
	page.tsx
	globals.css
components/
	about-section.tsx
	contact-section.tsx
	experience-section.tsx
	hero-demo.tsx
	main-header.tsx
	projects-section.tsx
	skills-section.tsx
	technologies-section.tsx
	why-choose-me-section.tsx
	ui/
hooks/
lib/
public/images/
```

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- pnpm installed

### Install Dependencies

```bash
pnpm install
```

### Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
```

### Start Production Server

```bash
pnpm start
```

## Customization

If you want to personalize this portfolio further, the main content lives in the section components inside the `components/` folder. You can update:

- Personal bio in `components/about-section.tsx`
- Skills in `components/skills-section.tsx`
- Projects in `components/projects-section.tsx`
- Social links and contact details in `components/contact-section.tsx`
- Navigation items in `components/main-header.tsx`

## Notes

- Images are stored in `public/images/`.
- The app is built as a static portfolio, so most content is hardcoded inside components.
- If you change section IDs, make sure the navigation anchors are updated too.

## Contact

If you want to connect, update the social links and contact details in the contact section with your latest information.

---

Built with care to present my portfolio in a professional and memorable way.
