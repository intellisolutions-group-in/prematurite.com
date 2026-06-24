# Deployment Guide - Prematurite Digital Health

This guide details how to install dependencies, run the development server, build the production static export, and deploy the resulting website.

## 1. Prerequisites

Ensure you have Node.js (version 18.0.0 or higher) and npm installed.

## 2. Installation

Install the required node modules:
```bash
npm install
```
This installs the core dependencies (`next`, `react`, `react-dom`, `framer-motion`, `lucide-react`, and devDependencies).

## 3. Development Server

Run the local development server to test pages and interactions:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

## 4. Static Export Build

The Next.js configuration is optimized for a static HTML export. 
Command to trigger the build:
```bash
npm run build
```

During this build process:
1. Next.js compiles the React pages into optimized JavaScript chunks.
2. The dynamic parameters for the 12 services and 6 blog posts are read via `generateStaticParams()`.
3. Every route is compiled into a static HTML file.
4. The output is generated and saved inside the `/out/` folder at the project root.

## 5. Deployment of /out Folder

The compiled static HTML files inside `/out/` can be deployed to any static web hosting service, including:
* Netlify
* Vercel (using Static Project configuration)
* GitHub Pages
* Cloudflare Pages
* AWS S3 bucket combined with CloudFront

To upload:
Point your hosting provider's publish directory to `out`.
No server-side node engines are required for hosting since all routes compile into client-ready HTML, CSS, and JS.
