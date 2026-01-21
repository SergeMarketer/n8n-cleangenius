# CleanGenius

AI-powered cleaning coach chat interface. Get expert cleaning tips, product recommendations, and step-by-step guides from your personal AI cleaning coach.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## Features

- **AI Chat Interface** - Connected to n8n webhook for intelligent cleaning advice
- **Gamification System** - 7 levels from "Tidy Apprentice" to "Clean Supreme"
- **Daily Streaks** - Track consecutive days of engagement
- **Progress Tracking** - Visual progress bar to next level
- **Tip of the Day** - Rotating cleaning tips
- **Suggested Prompts** - Quick-start questions for new users
- **Responsive Design** - Mobile-friendly with slide-out sidebar

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- n8n Webhook Integration

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- n8n instance with Cleaning Coach workflow

### Installation

```bash
# Clone the repository
git clone https://github.com/SergeMarketer/n8n-cleangenius.git
cd n8n-cleangenius

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your n8n webhook URL

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

### Environment Variables

| Variable | Description |
|----------|-------------|
| `N8N_WEBHOOK_URL` | Your n8n Cleaning Coach webhook URL |

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project to Vercel
3. Add `N8N_WEBHOOK_URL` environment variable
4. Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/SergeMarketer/n8n-cleangenius)

## Level System

| Level | Title | Messages Required |
|-------|-------|-------------------|
| 1 | Tidy Apprentice | 0 |
| 2 | Dust Buster | 5 |
| 3 | Clean Machine | 15 |
| 4 | Sparkle Specialist | 30 |
| 5 | Hygiene Hero | 50 |
| 6 | Pristine Pro | 75 |
| 7 | Clean Supreme | 100 |

## License

MIT
