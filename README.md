# 🚀 NFTLIFY | NFT Trading Platform

*A modern, full-featured NFT marketplace built with Next.js 15*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/kukyasins-projects/v0-nftlify-platform)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/MGAvL9097eO)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🏗️ Project Structure](#️-project-structure)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📱 Pages & Components](#-pages--components)
- [🎨 Design System](#-design-system)
- [📊 Data Management](#-data-management)
- [🔧 Configuration](#-configuration)
- [📚 For Beginners](#-for-beginners)
- [🎓 For Advanced Developers](#-for-advanced-developers)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🎯 Overview

**NFTLIFY** is a comprehensive NFT trading platform that provides users with a seamless experience for discovering, trading, and managing digital collectibles. Built with modern web technologies, it features a sleek dark interface, real-time data, and advanced filtering capabilities.

### 🌟 What Makes NFTLIFY Special?

- **Modern UI/UX**: Dark theme with orange accents for optimal viewing
- **Real-time Data**: Live market data and trending collections
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Advanced Filtering**: Comprehensive search and filter options
- **Wallet Integration**: Multiple wallet connection options
- **Performance Optimized**: Built with Next.js 15 for lightning-fast performance

---

## ✨ Features

### 🏠 **Homepage**
- Hero section with featured collections
- Trending currencies display
- Featured drops showcase
- Top movers analytics
- Weekly highlights
- Newsletter subscription

### 🖼️ **Collections Page**
- Grid and list view modes
- Category filtering (Art, Gaming, Metaverse, PFP, Utility)
- Search functionality
- Sorting options (volume, floor price, etc.)
- Verified collection badges
- Real-time statistics

### 📈 **Trending Page**
- Time-based filtering (1D, 7D, 30D, ALL)
- Volume and price change tracking
- Owner statistics
- Interactive data tables
- Market analytics

### 💧 **Drops Page**
- Live drop tracking with countdown timers
- Status filtering (Live, Coming Soon, Ended)
- Mint progress visualization
- Creator information and verification
- Category-based filtering

### 📊 **Activity Page**
- Real-time marketplace activity
- Event filtering (Sales, Mints, Transfers)
- Collection-based filtering
- Price and rarity tracking
- User activity monitoring

### 🔗 **Wallet Integration**
- Multiple wallet support (MetaMask, Coinbase, WalletConnect, etc.)
- Email authentication option
- Secure connection modal
- Installation status detection

---

## 🏗️ Project Structure

\`\`\`
nftlify/
├── 📁 app/                     # Next.js App Router
│   ├── 📄 layout.tsx          # Root layout component
│   ├── 📄 page.tsx            # Homepage
│   ├── 📄 globals.css         # Global styles
│   ├── 📄 loading.tsx         # Global loading component
│   ├── 📁 collections/        # Collections page
│   │   ├── 📄 page.tsx
│   │   └── 📄 loading.tsx
│   ├── 📁 trending/           # Trending page
│   │   ├── 📄 page.tsx
│   │   └── 📄 loading.tsx
│   ├── 📁 drops/              # Drops page
│   │   ├── 📄 page.tsx
│   │   └── 📄 loading.tsx
│   └── 📁 activity/           # Activity page
│       ├── 📄 page.tsx
│       └── 📄 loading.tsx
├── 📁 components/             # Reusable components
│   ├── 📁 ui/                 # shadcn/ui components
│   │   ├── 📄 button.tsx
│   │   ├── 📄 card.tsx
│   │   ├── 📄 checkbox.tsx
│   │   └── 📄 eth-symbol.tsx
│   ├── 📄 Header.tsx          # Navigation header
│   ├── 📄 Footer.tsx          # Site footer
│   ├── 📄 WalletModal.tsx     # Wallet connection modal
│   └── 📄 theme-provider.tsx  # Theme context provider
├── 📁 data/                   # JSON data files
│   ├── 📄 activity.json       # Activity feed data
│   ├── 📄 collections.json    # Collections metadata
│   ├── 📄 drops.json          # Drops information
│   ├── 📄 featured-collections.json
│   ├── 📄 trending-collections.json
│   └── 📄 trending-currencies.json
├── 📁 hooks/                  # Custom React hooks
│   ├── 📄 use-mobile.tsx      # Mobile detection hook
│   └── 📄 use-toast.ts        # Toast notification hook
├── 📁 lib/                    # Utility functions
│   └── 📄 utils.ts            # Common utilities
├── 📁 public/                 # Static assets
│   ├── 📁 fonts/              # Custom fonts
│   │   ├── 📄 ProtoMono-Light.otf
│   │   ├── 📄 ProtoMono-Regular.otf
│   │   └── 📄 ProtoMono-Bold.otf
│   └── 📁 images/             # Image assets
├── 📄 tailwind.config.ts      # Tailwind configuration
├── 📄 next.config.mjs         # Next.js configuration
├── 📄 package.json            # Dependencies and scripts
├── 📄 tsconfig.json           # TypeScript configuration
└── 📄 README.md               # This file
\`\`\`

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://reactjs.org/)** - UI library with latest features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

### **Styling & UI**
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - High-quality component library
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Proto Mono](https://fonts.google.com/)** - Custom monospace font

### **State Management & Data**
- **JSON-based data** - Lightweight data management
- **React Hooks** - Built-in state management
- **Context API** - Theme and global state

### **Development Tools**
- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[Vercel](https://vercel.com/)** - Deployment platform

---

## 🚀 Quick Start

### **Prerequisites**
- Node.js 18+ installed
- npm, yarn, or pnpm package manager
- Git for version control

### **Installation**

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/nftlify.git
   cd nftlify
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using pnpm
   pnpm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   # Using npm
   npm run dev
   
   # Using yarn
   yarn dev
   
   # Using pnpm
   pnpm dev
   \`\`\`

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Available Scripts**

\`\`\`bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
\`\`\`

---

## 📱 Pages & Components

### **🏠 Homepage (`app/page.tsx`)**
The main landing page featuring:
- **Hero Section**: Featured collection showcase with interactive selection
- **Featured Collections**: Grid of hand-picked collections
- **Trending Currencies**: Real-time cryptocurrency data
- **Featured Drops**: Upcoming and live NFT drops
- **Top Movers**: Collections with highest volume increase
- **Trending Collections**: Most popular collections
- **Weekly Highlights**: Top performing collections
- **Newsletter Signup**: Email subscription form

**Key Components Used:**
- `Header` - Navigation and search
- `Footer` - Site links and information
- `Button` - Interactive elements
- `Image` - Optimized image display

### **🖼️ Collections Page (`app/collections/page.tsx`)**
Browse and discover NFT collections:
- **View Modes**: Toggle between grid and list views
- **Search**: Real-time collection search
- **Filters**: Category-based filtering system
- **Sorting**: Multiple sorting options
- **Statistics**: Floor price, volume, and owner data

**Key Features:**
- Responsive grid layout
- Advanced filtering system
- Real-time search functionality
- Verified collection badges
- Interactive hover effects

### **📈 Trending Page (`app/trending/page.tsx`)**
Market analytics and trending data:
- **Time Filters**: 1D, 7D, 30D, ALL time periods
- **Data Table**: Sortable collection statistics
- **Market Stats**: Volume, floor price, and owner metrics
- **Visual Indicators**: Trend arrows and color coding

**Data Displayed:**
- Collection rankings
- Floor price changes
- Volume statistics
- Owner percentages
- Market cap information

### **💧 Drops Page (`app/drops/page.tsx`)**
NFT drop discovery and tracking:
- **Status Filtering**: Live, Coming Soon, Ended
- **Category Filters**: Art, Gaming, Metaverse, Nature
- **Countdown Timers**: Real-time drop countdowns
- **Progress Bars**: Mint progress visualization
- **Creator Info**: Verified creator badges

**Drop Information:**
- Mint prices and supply
- Creator verification
- Drop descriptions
- Time remaining
- Minting progress

### **📊 Activity Page (`app/activity/page.tsx`)**
Real-time marketplace activity:
- **Event Filtering**: Sales, Mints, Transfers
- **Collection Filters**: Filter by specific collections
- **Price Tracking**: Transaction prices and currencies
- **User Activity**: From/To user information
- **Time Stamps**: Recent activity timestamps

**Activity Data:**
- Transaction types
- Item information
- Price and currency
- Rarity rankings
- User addresses

---

## 🎨 Design System

### **Color Palette**
\`\`\`css
/* Primary Colors */
--blur-orange: #f95200    /* Primary accent */
--blur-green: #ade25d     /* Success/positive */
--blur-red: #f95200       /* Error/negative */
--blur-gray: #929292      /* Secondary text */

/* Background Colors */
--background: #000000     /* Main background */
--card: #030303          /* Card backgrounds */
--border: #333333        /* Border colors */
\`\`\`

### **Typography**
- **Primary Font**: Proto Mono (Custom monospace)
- **Weights**: Light (300), Regular (400), Bold (700)
- **Features**: Stylistic sets and character variants

### **Spacing System**
- **Base Unit**: 4px (0.25rem)
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

### **Component Patterns**
- **Cards**: Rounded corners, subtle borders, hover effects
- **Buttons**: Orange primary, outline secondary, ghost tertiary
- **Tables**: Zebra striping, hover states, sortable headers
- **Forms**: Consistent input styling, focus states

---

## 📊 Data Management

### **JSON Data Structure**

**Collections Data (`data/collections.json`)**
\`\`\`json
{
  "id": "unique-identifier",
  "name": "Collection Name",
  "verified": true,
  "floorPrice": "1.23",
  "items": "10,000",
  "volume": "456.78",
  "change": "+5.2%",
  "isPositive": true,
  "image": "/path/to/image.jpg",
  "avatars": ["avatar1.jpg", "avatar2.jpg"]
}
\`\`\`

**Activity Data (`data/activity.json`)**
\`\`\`json
{
  "id": 1,
  "event": "Sale",
  "item": {
    "name": "Item Name",
    "collection": "Collection Name",
    "image": "/path/to/image.jpg",
    "verified": true
  },
  "price": "0.123",
  "currency": "ETH",
  "rarity": "#1,234",
  "qty": 1,
  "from": "user1",
  "to": "user2",
  "time": "3s ago"
}
\`\`\`

**Drops Data (`data/drops.json`)**
\`\`\`json
{
  "id": 1,
  "name": "Drop Name",
  "description": "Drop description",
  "image": "/path/to/image.jpg",
  "banner": "/path/to/banner.jpg",
  "price": "0.08",
  "currency": "ETH",
  "status": "Live",
  "supply": "10,000",
  "minted": "3,247",
  "startDate": "2024-01-15T10:00:00Z",
  "endDate": "2024-01-22T10:00:00Z",
  "creator": "Creator Name",
  "verified": true,
  "category": "Art"
}
\`\`\`

---

## 🔧 Configuration

### **Tailwind Configuration (`tailwind.config.ts`)**
\`\`\`typescript
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blur-orange": "#f95200",
        "blur-green": "#ade25d",
        "blur-red": "#f95200",
        "blur-gray": "#929292",
      },
      fontFamily: {
        sans: ["var(--font-proto-mono)", "monospace"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
\`\`\`

### **Next.js Configuration (`next.config.mjs`)**
\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['placeholder.svg'],
  },
}

export default nextConfig
\`\`\`

---

## 📚 For Beginners

### **🎯 Getting Started with NFTLIFY**

If you're new to web development or React, here's how to understand and work with this project:

#### **1. Understanding the File Structure**
- `app/` - Contains all your pages (like homepage, collections, etc.)
- `components/` - Reusable pieces of UI (like buttons, headers)
- `data/` - JSON files that store information about NFTs and collections
- `public/` - Images, fonts, and other static files

#### **2. Key Concepts to Learn**

**React Components**
\`\`\`tsx
// A simple component example
function MyComponent() {
  return (
    <div className="bg-black text-white p-4">
      <h1>Hello NFTLIFY!</h1>
    </div>
  )
}
\`\`\`

**Props (Passing Data)**
\`\`\`tsx
// Component that receives data
function CollectionCard({ name, price, image }) {
  return (
    <div className="border rounded-lg p-4">
      <img src={image || "/placeholder.svg"} alt={name} />
      <h3>{name}</h3>
      <p>{price} ETH</p>
    </div>
  )
}
\`\`\`

**State (Managing Data)**
\`\`\`tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
\`\`\`

#### **3. How to Make Changes**

**Adding a New Page:**
1. Create a new folder in `app/` (e.g., `app/profile/`)
2. Add a `page.tsx` file inside
3. Export a React component

**Modifying Styles:**
1. Use Tailwind classes: `className="bg-blue-500 text-white p-4"`
2. Or modify `globals.css` for custom styles

**Adding New Data:**
1. Create or modify JSON files in `data/`
2. Import and use in your components

#### **4. Common Tasks**

**Adding a New Collection:**
\`\`\`json
// In data/collections.json
{
  "id": "my-collection",
  "name": "My Awesome Collection",
  "verified": true,
  "floorPrice": "2.5",
  "items": "5,000"
}
\`\`\`

**Creating a New Component:**
\`\`\`tsx
// components/MyComponent.tsx
export default function MyComponent() {
  return (
    <div className="p-4 border rounded">
      <h2>My Component</h2>
    </div>
  )
}
\`\`\`

#### **5. Learning Resources**
- [React Documentation](https://react.dev/)
- [Next.js Tutorial](https://nextjs.org/learn)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🎓 For Advanced Developers

### **🚀 Advanced Features & Patterns**

#### **1. Architecture Decisions**

**App Router Structure**
- Leverages Next.js 15 App Router for improved performance
- Server Components by default for better SEO
- Client Components only when necessary (marked with 'use client')

**Component Composition**
\`\`\`tsx
// Higher-order component pattern
function withLoading<T>(Component: React.ComponentType<T>) {
  return function LoadingComponent(props: T) {
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
      // Simulate loading
      setTimeout(() => setLoading(false), 1000)
    }, [])
    
    if (loading) return <div>Loading...</div>
    return <Component {...props} />
  }
}
\`\`\`

**Custom Hooks**
\`\`\`tsx
// hooks/useCollections.ts
export function useCollections() {
  const [collections, setCollections] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    // Fetch collections data
    fetchCollections().then(data => {
      setCollections(data)
      setLoading(false)
    })
  }, [])
  
  return { collections, loading }
}
\`\`\`

#### **2. Performance Optimizations**

**Image Optimization**
\`\`\`tsx
import Image from 'next/image'

// Optimized image component
function OptimizedImage({ src, alt, ...props }) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={400}
      height={300}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
      {...props}
    />
  )
}
\`\`\`

**Lazy Loading**
\`\`\`tsx
import { lazy, Suspense } from 'react'

const LazyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}
\`\`\`

**Memoization**
\`\`\`tsx
import { memo, useMemo, useCallback } from 'react'

const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: true
    }))
  }, [data])
  
  const handleClick = useCallback((id) => {
    // Handle click logic
  }, [])
  
  return (
    <div>
      {processedData.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  )
})
\`\`\`

#### **3. Advanced Patterns**

**Compound Components**
\`\`\`tsx
// Modal compound component
const Modal = {
  Root: ({ children, isOpen, onClose }) => (
    isOpen ? (
      <div className="fixed inset-0 bg-black/50" onClick={onClose}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    ) : null
  ),
  Header: ({ children }) => (
    <div className="modal-header">{children}</div>
  ),
  Body: ({ children }) => (
    <div className="modal-body">{children}</div>
  ),
  Footer: ({ children }) => (
    <div className="modal-footer">{children}</div>
  )
}

// Usage
<Modal.Root isOpen={isOpen} onClose={closeModal}>
  <Modal.Header>Title</Modal.Header>
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>Actions</Modal.Footer>
</Modal.Root
\`\`\`

**Render Props Pattern**
\`\`\`tsx
function DataProvider({ children, endpoint }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [endpoint])
  
  return children({ data, loading })
}

// Usage
<DataProvider endpoint="/api/collections">
  {({ data, loading }) => (
    loading ? <Spinner /> : <CollectionList data={data} />
  )}
</DataProvider>
\`\`\`

#### **4. Testing Strategies**

**Unit Testing with Jest**
\`\`\`tsx
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/ui/button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
  
  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
\`\`\`

**Integration Testing**
\`\`\`tsx
// __tests__/pages/collections.test.tsx
import { render, screen } from '@testing-library/react'
import CollectionsPage from '../app/collections/page'

// Mock the data
jest.mock('../data/collections.json', () => [
  { id: '1', name: 'Test Collection', verified: true }
])

describe('Collections Page', () => {
  it('displays collections', () => {
    render(<CollectionsPage />)
    expect(screen.getByText('Test Collection')).toBeInTheDocument()
  })
})
\`\`\`

#### **5. Deployment & DevOps**

**Environment Configuration**
\`\`\`bash
# .env.local
NEXT_PUBLIC_API_URL=https://api.nftlify.com
NEXT_PUBLIC_WALLET_CONNECT_ID=your_wallet_connect_id
DATABASE_URL=postgresql://...
\`\`\`

**CI/CD Pipeline (GitHub Actions)**
\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
\`\`\`

---

## 🚀 Deployment

### **Vercel Deployment (Recommended)**

1. **Connect to Vercel**
   \`\`\`bash
   npm i -g vercel
   vercel login
   vercel
   \`\`\`

2. **Environment Variables**
   Set up in Vercel dashboard:
   - `NEXT_PUBLIC_API_URL`
   - `NEXT_PUBLIC_WALLET_CONNECT_ID`

3. **Custom Domain**
   - Add domain in Vercel dashboard
   - Configure DNS settings

### **Alternative Deployment Options**

**Netlify**
\`\`\`bash
npm run build
# Upload dist folder to Netlify
\`\`\`

**Docker**
\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

**AWS Amplify**
\`\`\`yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
\`\`\`

---

## 🤝 Contributing

### **Development Workflow**

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Make your changes**
4. **Run tests**
   \`\`\`bash
   npm run test
   npm run lint
   \`\`\`
5. **Commit your changes**
   \`\`\`bash
   git commit -m "Add amazing feature"
   \`\`\`
6. **Push to the branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
7. **Open a Pull Request**

### **Code Style Guidelines**

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

### **Pull Request Template**
\`\`\`markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tests pass locally
- [ ] Added tests for new features

## Screenshots
If applicable, add screenshots
\`\`\`

---

## 📄 License

This project is built with [v0.dev](https://v0.dev) and deployed on [Vercel](https://vercel.com).

### **MIT License**
\`\`\`
Copyright (c) 2024 NFTLIFY

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
\`\`\`

---

## 🔗 Links

- **Live Demo**: [https://nftlify.vercel.app](https://nftlify.vercel.app)
- **Documentation**: [https://docs.nftlify.com](https://docs.nftlify.com)
- **API Reference**: [https://api.nftlify.com/docs](https://api.nftlify.com/docs)
- **Support**: [support@nftlify.com](mailto:support@nftlify.com)

---

## 🙏 Acknowledgments

- [Next.js Team](https://nextjs.org/) for the amazing framework
- [Vercel](https://vercel.com/) for hosting and deployment
- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Tailwind CSS](https://tailwindcss.com/) for the styling system
- [v0.dev](https://v0.dev/) for the development platform

---

**Built with ❤️ by the NFTLIFY team**

*Happy coding! 🚀*
