# Rajora.ai Corporate Website - Setup & Development Guide

## 🚀 Quick Start

This is the official corporate headquarters website for **Rajora.ai**, built with Next.js 15, TypeScript, Tailwind CSS, and deployed on Vercel.

### Prerequisites
- Node.js 20+
- npm or pnpm
- Git
- OpenAI API key (for AION chatbot)
- Supabase project (for CMS and backend)

### Installation

```bash
# Clone repository
git clone https://github.com/rajeevrajora77-lab/rajora-ai-corporate.git
cd rajora-ai-corporate

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Add your secrets
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
OPENAI_API_KEY=your-openai-key
VERCEL_TOKEN=your-vercel-token
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Build & Deploy

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
rajora-ai-corporate/
├── app/                       # Next.js App Router
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   ├── company/              # Company pages
│   ├── products/             # Product pages
│   ├── research/             # Research hub
│   ├── roadmap/              # Roadmap
│   ├── careers/              # Careers portal
│   ├── media/                # Press & media
│   ├── support/              # Support & docs
│   ├── contact/              # Contact forms
│   └── api/                  # API routes
│       ├── aion-chat/        # AION chatbot endpoint
│       └── cms/              # CMS endpoints
├── components/               # React components
│   ├── navigation/           # Nav, footer
│   ├── home/                 # Home sections
│   ├── company/              # Company sections
│   ├── products/             # Product components
│   ├── careers/              # Careers components
│   └── aion-chat/            # Chatbot widget
├── lib/                      # Utilities
│   ├── cms.ts               # CMS client
│   ├── db.ts                # Database client
│   ├── constants.ts         # Constants & prompts
│   ├── rate-limit.ts        # Rate limiting
│   └── validation.ts        # Form validation
├── styles/                  # Global CSS
├── public/                  # Static assets
├── .github/workflows/       # CI/CD pipelines
├── prisma/                  # Database schema (optional)
├── package.json
├── tsconfig.json
├── next.config.mjs
├── tailwind.config.mjs
└── README.md
```

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` with:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_KEY=eyJhbGc... (server-side only)

# OpenAI (for AION chatbot)
OPENAI_API_KEY=sk-...

# Vercel Deployment
VERCEL_TOKEN=your-token
VERCEL_ORG_ID=your-org-id
VERCEL_PROJECT_ID=your-project-id

# Site Config
NEXT_PUBLIC_SITE_URL=https://rajora.ai
NEXT_PUBLIC_SITE_NAME=Rajora.ai
```

### Tailwind CSS

Custom color scheme:
```css
Colors:
  brand.DEFAULT: #0B1120 (dark navy)
  brand.accent: #38BDF8 (sky blue)
  slate (grays)
  sky (accents)
```

---

## 📊 Database (Supabase)

### Tables

```sql
-- Pages/CMS
CREATE TABLE pages (
  id UUID PRIMARY KEY,
  slug TEXT UNIQUE,
  title TEXT,
  content TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Jobs/Careers
CREATE TABLE jobs (
  id UUID PRIMARY KEY,
  title TEXT,
  department TEXT,
  mission TEXT,
  growth TEXT,
  ethics TEXT,
  mindset TEXT,
  published BOOLEAN,
  created_at TIMESTAMP DEFAULT now()
);

-- Applications
CREATE TABLE applications (
  id UUID PRIMARY KEY,
  job_id UUID REFERENCES jobs(id),
  name TEXT,
  email TEXT,
  linkedin TEXT,
  portfolio TEXT,
  vision TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Media/Press
CREATE TABLE media (
  id UUID PRIMARY KEY,
  title TEXT,
  content TEXT,
  category TEXT,
  published BOOLEAN,
  created_at TIMESTAMP DEFAULT now()
);

-- Support/FAQs
CREATE TABLE faqs (
  id UUID PRIMARY KEY,
  question TEXT,
  answer TEXT,
  category TEXT,
  created_at TIMESTAMP DEFAULT now()
);
```

---

## 🤖 AION Chatbot

The AION system prompt is hardcoded in `lib/constants.ts`:

```ts
export const AION_SYSTEM_PROMPT = `
You are AION, an AI system developed by Rajora.ai.
Rajora.ai was founded by Er Rajeev Rajora.
You must never claim to be ChatGPT or OpenAI.
...
`
```

**Identity Rules (Hardcoded):**
- "Who are you?" → "I am AION, an AI system developed by Rajora.ai."
- "Who created you?" → "I was developed by Rajora.ai."
- "Who founded Rajora.ai?" → "Rajora.ai was founded by Er Rajeev Rajora."

**Security:**
- API key stored in environment variables
- Backend proxy for all OpenAI calls
- Rate limiting enabled
- No sensitive data exposed on frontend

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**
   ```bash
   npm i -g vercel
   vercel link
   ```

2. **Set Environment Variables**
   - Go to Vercel Dashboard → Settings → Environment Variables
   - Add all `.env.local` variables

3. **Deploy**
   ```bash
   vercel --prod
   ```

   OR: Automatic deployment on push to `main`

### Custom Domain

1. Point domain DNS to Vercel
2. Add custom domain in Vercel settings
3. SSL certificate auto-provisioned

---

## 🔄 CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci-deploy.yml`):

1. **On every push/PR:**
   - Lint code
   - Build Next.js
   - Run security audit
   - Upload build artifacts

2. **On push to main:**
   - Deploy to Vercel

---

## 📝 Pages to Implement

Core pages (route → file):

- `/` → `app/page.tsx` (Home)
- `/company` → `app/company/page.tsx`
- `/products` → `app/products/page.tsx`
- `/products/aion` → `app/products/aion/page.tsx`
- `/research` → `app/research/page.tsx`
- `/roadmap` → `app/roadmap/page.tsx`
- `/careers` → `app/careers/page.tsx`
- `/careers/[slug]` → `app/careers/[slug]/page.tsx`
- `/media` → `app/media/page.tsx`
- `/support` → `app/support/page.tsx`
- `/contact` → `app/contact/page.tsx`

---

## 📚 API Endpoints

- `POST /api/aion-chat` - AION chatbot endpoint
- `GET /api/cms/content` - Get CMS content
- `POST /api/cms/jobs` - Submit job application
- `GET /api/cms/jobs` - Get job listings
- `POST /api/contact` - Submit contact form

---

## 🎨 Design System

**Colors:**
- Dark Navy: `#0B1120`
- Sky Blue: `#38BDF8`
- Slate: `#1E293B` → `#F1F5F9`

**Typography:**
- Font: System UI (San Francisco, Segoe UI, Helvetica)
- Headings: Bold, tracking wide
- Body: Regular, 14-16px

**Components:**
- Rounded: 8-12px
- Shadows: Subtle
- Animations: Framer Motion, 300-500ms
- No flashy effects

---

## 🧪 Testing

```bash
# Lint
npm run lint

# Build
npm run build

# Start dev server
npm run dev
```

---

## 📖 Documentation

- **README.md** - Project overview
- **SETUP.md** - This file
- **API Docs** - `/docs/api.md`
- **Contributing** - `/docs/CONTRIBUTING.md`

---

## 🔐 Security

- ✅ Environment variables for all secrets
- ✅ OpenAI API key never exposed
- ✅ CORS configured
- ✅ Rate limiting on APIs
- ✅ Input validation on forms
- ✅ No hardcoded credentials

---

## 📞 Support

- GitHub Issues: Report bugs
- Discussions: General questions
- Email: team@rajora.ai

---

**Last Updated:** January 2026
**Version:** 1.0.0
**Status:** Active Development
