# 🚀 E-Commerce Sanity + Stripe Integration

## 🛠 Tech Stack

**Backend**:
- Sanity CMS (Content Management)
- Stripe (Payment Processing)
- Clerk (Authentication)

**Frontend**:
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- React Hot Toast
- React Icons

## 🌟 Key Features

- 🛍️ Full-featured e-commerce platform
- 📦 Product management with Sanity CMS
- 💳 Stripe payment integration
- 🔐 Clerk authentication system
- 🛒 Shopping cart functionality
- 🔍 Product search and filtering
- 📱 Responsive mobile-first design

## 📂 Folder Structure

```
ecommerce_sanity_stripe-1/
├── sanity_ecommerce/       # Sanity CMS configuration
│   ├── schemas/           # Content schemas (products, categories)
│   └── sanity.json        # Sanity configuration
├── src/
│   ├── components/        # React components
│   ├── context/           # State management
│   ├── lib/               # Sanity & Stripe clients
│   ├── pages/             # Next.js routes
│   │   ├── api/           # API routes (Stripe, search)
│   │   ├── product/       # Product pages
│   │   └── ...
│   └── styles/            # Global CSS
├── public/                # Static assets
├── package.json           # Project dependencies
└── ...
```

## 🖥 Local Setup

```bash
npm install
npm run dev
```

## 🔑 Environment Variables

Create `.env` file with:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_id
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_key
STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
```

## 👨💻 Author
- GitHub: [@hashiifabdillah](https://github.com/hashiifab)
- LinkedIn: [Hashiif Abdillah](https://www.linkedin.com/in/hashiif-abdillah-665373297/)