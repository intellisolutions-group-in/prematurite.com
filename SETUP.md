# Setup Guide - Prematurite Digital Health

This guide details how to customize, manage, and update the educational digital health website for Prematurite Digital Health (prematurite.com).

## 1. Updating Brand & Contact Details

All branding, email, phone, and address metadata are controlled through a single data file:
Location: `/data/company.json`

To update these configurations, modify the values directly:
```json
{
  "brandName": "Prematurite Digital Health",
  "domain": "prematurite.com",
  "website": "http://prematurite.com",
  "targetCountry": "India",
  "industry": "Digital Health Education",
  "establishedYear": "2003",
  "domainRegisteredDate": "2003-04-26",
  "email": "info@prematurite.com",
  "phone": "+91 XXXXX XXXXX (Your New Phone Number)",
  "address": "Your New Office Address Space"
}
```

## 2. Replacing the Placeholder Logo

A temporary SVG logo is saved at:
`/public/images/logo-placeholder.svg`

To replace this with your official brand logo:
1. Save your logo as an SVG file or image (PNG, webp).
2. Save it inside `/public/images/` under a suitable name (e.g. `brand-logo.svg`).
3. Open `/data/company.json` and update the `"logo"` parameter to point to the new path:
   `"logo": "/images/brand-logo.svg"`
4. Open `/components/layout/Header.js` and `/components/layout/Footer.js` if you need to adjust height/width rendering styles.

## 3. Modifying Educational Topics (Services)

To update the titles, descriptions, target audiences, or checklists of the 12 educational program pages:
Modify the database file: `/data/services.json`

Each entry has the following structure:
* `slug`: Determines the URL path (e.g. `/services/premature-baby-care-guidance/`).
* `title`: Title displayed on top of detail pages.
* `icon`: Lucide React icon name (e.g. `Baby`, `Activity`, `Heart`).
* `shortDescription`: Displayed on preview cards.
* `whoFor`: Target audience information.
* `learningAreas`: Array of minimum 6 focus areas.
* `guidanceText`: Detailed educational overview.
* `whenDoctor`: Red warning pediatric callout text.

## 4. Modifying Blog Articles

To write new articles or edit existing ones:
Modify the database file: `/data/blog.json`

Ensure new articles have:
* An entry in `/data/blog.json` with a unique slug.
* A paragraph-by-paragraph array structure in the `"content"` field using types: `"paragraph"`, `"heading"` (with matching `"id"` for Table of Contents), and `"list"`.
* Comprehensive disclaimer references.

## 5. Adding Social Links

To add social media channels in the future:
1. Open `/data/navigation.json` and add a `"social"` array:
   ```json
   "social": [
     { "name": "LinkedIn", "path": "https://linkedin.com/company/prematurite" }
   ]
   ```
2. Open `/components/layout/Footer.js` and import the social links data to map them into the footer grid.

## 6. Medical Content Responsibility

This website is positioned strictly as an educational resource. Do not write clinical diagnoses, treatments, cure guarantees, or hospital referrals. Always include disclaimer boxes on pages containing care advice, reminding parents to consult qualified pediatricians or neonatologists.
