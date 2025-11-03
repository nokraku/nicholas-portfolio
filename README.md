# Nicholas Osorio-Okraku Portfolio Website

A clean, professional Next.js portfolio website built with TypeScript and Tailwind CSS.

## 🎨 Design Specs
- **Font**: Manrope (400, 500, 600, 700, 800 weights)
- **Primary Color**: #B3050A (Deep Red)
- **Background**: Pure White (#FFFFFF)
- **Font Sizes**:
  - Header (Your Name): 64px
  - Body Text: 24px
  - "Find your voice" Header: 56px
  - Small Text: 16px

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your website.

### 3. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
nicholas-portfolio/
├── app/
│   ├── layout.tsx       # Root layout with Manrope font
│   ├── page.tsx         # Homepage component
│   └── globals.css      # Global styles with Tailwind
├── public/
│   └── hero-image.png   # Your hero section photo
└── package.json
```

## 📝 What's Included

✅ Responsive design (mobile + desktop)
✅ Hero section with your photo and intro
✅ Company logos section (PlayStation, Paramount, Chanel, etc.)
✅ Strategic frameworks section
✅ Case studies showcase
✅ Contact footer

## 🔧 Customization

### Update Your Photo
Replace `/public/hero-image.png` with your preferred image.

### Update Content
Edit `/app/page.tsx` to change:
- Text content
- LinkedIn URL
- Email address
- Case study details

### Add More Pages
Create new files in the `/app` directory:
- `/app/about/page.tsx` → Creates /about page
- `/app/contact/page.tsx` → Creates /contact page

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (Vercel auto-detects Next.js)

### Other Options
- Netlify
- Railway
- AWS Amplify

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Manrope (Google Fonts)

## ✅ Build Status

Project builds successfully with no errors or warnings.

---

Built by Claude for Nicholas Osorio-Okraku
