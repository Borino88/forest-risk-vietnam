# Forest Risk Vietnam Platform

An Interpretable Machine Learning Pipeline for Deforestation Risk Prediction in Vietnam at 1 km Resolution.

## Project Overview
This platform is a real academic geospatial research portal developed for a pilot study in Gia Lai Province, Vietnam. It integrates multi-source satellite data (Hansen, GFW, Sentinel-2) and terrain/infrastructure data (SRTM, OSM) to predict deforestation probability.

### Key Features
- **Public Research Portal:** Transparent explanation of methodology, datasets, and results.
- **Interactive Map:** High-performance GIS visualization using MapLibre GL JS.
- **Academic Dashboard:** Secure area for researchers to manage notes, downloads, and private layers.
- **Production CMS:** Powered by Payload CMS for managing all research assets.

## Tech Stack
- **Frontend:** Next.js 15 (App Router)
- **CMS:** Payload CMS 3.0
- **Database:** PostgreSQL
- **Maps:** MapLibre GL JS
- **Styling:** Tailwind CSS
- **Deployment:** GitHub + Railway

## Local Development

### Prerequisites
- Node.js 20+
- PostgreSQL database

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Update DATABASE_URL and PAYLOAD_SECRET
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

### Seeding Initial Data
To populate the CMS with initial academic content:
```bash
npm run seed
```

## Deployment to Railway

1. Create a new project on Railway.
2. Connect your GitHub repository.
3. Provision a PostgreSQL database on Railway.
4. Add the following Environment Variables:
   - `DATABASE_URL` (From Railway Postgres)
   - `PAYLOAD_SECRET` (Random string)
   - `NEXT_PUBLIC_SERVER_URL` (Railway App URL)
   - `NEXT_PUBLIC_SITE_URL` (Railway App URL)
5. Deploy.
6. Connect your purchased domain in the Railway Settings.

## Academic Positioning
This platform currently presents a pilot implementation for K’Bang and Mang Yang districts in Gia Lai Province. The methodology is designed to be scalable to larger regions, but current model outputs should be interpreted within the pilot study area.

## Future Expansion
- National-scale satellite extraction pipeline.
- Inclusion of rainfall and population density features.
- Near-real-time alert window optimization.

---
© 2026 Environmental AI Research Group | Gia Lai Province Pilot
