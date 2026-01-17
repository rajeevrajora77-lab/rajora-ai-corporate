# Rajora.ai Corporate Website - Complete Deployment Guide

## 🚀 End-to-End Automation

This guide provides complete automation steps to deploy Rajora.ai from scratch.

---

## PHASE 1: GitHub Repository Setup ✅ COMPLETE

**Status:** Repository created and configured
- Repo: `rajora-ai-corporate`
- Owner: `rajeevrajora77-lab`
- Visibility: Public
- Files: `package.json`, `tsconfig.json`, `SETUP.md`, `.env.example`, CI/CD workflow

---

## PHASE 2: Local Development Environment

### Step 1: Clone Repository
```bash
git clone https://github.com/rajeevrajora77-lab/rajora-ai-corporate.git
cd rajora-ai-corporate
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Set Up Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and add:
- Supabase credentials
- OpenAI API key
- Vercel deployment tokens

### Step 4: Start Development Server
```bash
npm run dev
# Open http://localhost:3000
```

---

## PHASE 3: Supabase Database Setup

### Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create new project in your region
3. Wait for initialization (5-10 minutes)
4. Copy credentials to `.env.local`:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_KEY`

### Create Database Tables

Run SQL in Supabase SQL Editor:

```sql
-- Pages/CMS
CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Jobs
CREATE TABLE jobs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  department TEXT,
  mission TEXT,
  growth TEXT,
  ethics TEXT,
  mindset TEXT,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT now()
);

-- Job Applications
CREATE TABLE applications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  job_id UUID REFERENCES jobs(id),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  linkedin TEXT,
  portfolio TEXT,
  vision TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Media/Press
CREATE TABLE media (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT,
  category TEXT,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT now()
);

-- FAQs
CREATE TABLE faqs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  created_at TIMESTAMP DEFAULT now()
);

-- Enable RLS
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
```

### Add RLS Policies

```sql
-- Public read access to published content
CREATE POLICY "public_read_published_pages" ON pages
  FOR SELECT
  USING (published = true);

CREATE POLICY "public_read_published_jobs" ON jobs
  FOR SELECT
  USING (published = true);

-- Authenticated insert for applications
CREATE POLICY "public_insert_applications" ON applications
  FOR INSERT
  WITH CHECK (true);
```

---

## PHASE 4: OpenAI / AION Chatbot Setup

### Get OpenAI API Key
1. Go to [platform.openai.com](https://platform.openai.com)
2. Create API key
3. Add to `.env.local`:
   ```
   OPENAI_API_KEY=sk-...
   ```

### Test Chatbot
```bash
curl -X POST http://localhost:3000/api/aion-chat \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "content": "Who are you?"}
    ]
  }'
```

Expected response:
```json
{
  "message": {
    "content": "I am AION, an AI system developed by Rajora.ai."
  }
}
```

---

## PHASE 5: Vercel Deployment

### Create Vercel Project
1. Go to [vercel.com](https://vercel.com)
2. Import Git repository: `rajora-ai-corporate`
3. Configure project

### Set Environment Variables in Vercel

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_KEY
OPENAI_API_KEY
NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_SITE_NAME
```

### Deploy
```bash
vercel --prod
```

OR: Automatic deployment on git push to `main`

---

## PHASE 6: Connect Custom Domain

### DNS Configuration
1. In Vercel: Add custom domain
2. Point your domain DNS to Vercel:
   - Type: `CNAME`
   - Value: `cname.vercel-dns.com`
3. Wait for DNS propagation (up to 24 hours)
4. SSL certificate auto-provisioned

---

## PHASE 7: GitHub Secrets Configuration

### Add Repository Secrets

Go to GitHub Repo → Settings → Secrets & Variables → Actions

Add:
```
VERCEL_TOKEN = your-vercel-token
VERCEL_ORG_ID = your-org-id
VERCEL_PROJECT_ID = your-project-id
```

### Verify CI/CD
1. Make a test commit
2. GitHub Actions automatically runs
3. Check Actions tab for build logs
4. Vercel deploys automatically on main branch

---

## PHASE 8: Add Content

### Sample Data

Insert via Supabase UI or API:

```sql
-- Insert sample job
INSERT INTO jobs (title, department, mission) VALUES
('Senior Full-Stack Engineer', 'Engineering', 'Build scalable AI systems');

-- Insert FAQ
INSERT INTO faqs (question, answer, category) VALUES
('What is AION?', 'AION is our AI intelligence system', 'Products');
```

---

## PHASE 9: Monitoring & Observability

### Enable Monitoring
1. Vercel Analytics: Built-in
2. Error tracking: [Sentry](https://sentry.io)
3. Performance: [DataDog](https://www.datadoghq.com)

---

## PHASE 10: Security Hardening

### Security Checklist
- ✅ API keys in environment variables only
- ✅ OpenAI key never exposed on frontend
- ✅ CORS properly configured
- ✅ Rate limiting enabled
- ✅ Input validation on forms
- ✅ No hardcoded credentials
- ✅ HTTPS enforced
- ✅ CSP headers configured

### Test Security
```bash
curl -I https://rajora.ai
# Check for security headers
```

---

## Automation Checklist

- [ ] GitHub repository created
- [ ] Local environment set up
- [ ] Supabase project created
- [ ] Database tables created
- [ ] OpenAI API key obtained
- [ ] Vercel project created
- [ ] Environment variables configured
- [ ] Initial deploy successful
- [ ] Custom domain connected
- [ ] GitHub Actions verified
- [ ] Content added to database
- [ ] AION chatbot tested
- [ ] Security hardened

---

## Troubleshooting

### Build Fails
```bash
rm -rf .next node_modules
npm install
npm run build
```

### AION Chatbot Not Working
- Check `OPENAI_API_KEY` in `.env.local`
- Verify API key is valid
- Check rate limits
- Review server logs in Vercel

### Database Connection Issues
- Verify `NEXT_PUBLIC_SUPABASE_URL`
- Check `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Test connection with curl

---

## Next Steps

1. **Implement Frontend Pages**
   - Home, Company, Products, Research, Roadmap
   - Careers portal with job listings
   - Media/Press section
   - Support & Documentation

2. **Build Admin Dashboard**
   - Manage jobs
   - View applications
   - Publish press releases
   - Moderate FAQs

3. **Scale Infrastructure**
   - Add caching (Redis)
   - CDN optimization
   - Database indexing
   - Performance monitoring

4. **Team Collaboration**
   - Set up branch protection rules
   - Code review process
   - Deploy previews
   - Release management

---

## Support

- **Issues:** GitHub Issues
- **Discussions:** GitHub Discussions
- **Security:** team@rajora.ai

---

**Status:** Ready for development  
**Last Updated:** January 2026  
**Version:** 1.0.0
