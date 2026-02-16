# DevSphere Agency Website

A modern, full-featured agency website built with React, Firebase, and Vite. Features include user authentication, blog management, service showcases, and a responsive design.

## 🚀 Features

- **Authentication System**: Complete user registration, login, and protected routes
- **Blog Management**: Create, read, and manage blog posts
- **Service Showcase**: Display agency services and pricing
- **Responsive Design**: Mobile-first design with modern UI components
- **Firebase Integration**: Real-time database and authentication
- **State Management**: Centralized store using Context API
- **Routing**: Client-side routing with protected routes
- **Form Validation**: Input validation and error handling
- **Modern UI**: Custom components with consistent styling

## 📁 Project Structure

```
DevSphere-Agency-Website/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, icons, and media files
│   ├── components/              # Reusable UI components
│   │   ├── feedback/            # Error and loader components
│   │   │   ├── Error.jsx
│   │   │   └── Loader.jsx
│   │   ├── navigation/          # Navigation components
│   │   │   └── Sidebar.jsx
│   │   └── ui/                  # Base UI components
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       ├── Modal.jsx
│   │       ├── Footer.jsx
│   │       └── NavBar.jsx
│   ├── context/                 # React Context for state management
│   │   ├── AuthContext.jsx      # Authentication state
│   │   └── ThemeContext.jsx     # Theme management
│   ├── features/                # Feature-based modules
│   │   ├── auth/                # Authentication feature
│   │   │   ├── components/
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   ├── RegisterForm.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   ├── auth.api.js      # Auth API calls
│   │   │   ├── auth.hooks.js    # Custom auth hooks
│   │   │   ├── auth.service.js  # Auth business logic
│   │   │   ├── auth.store.js    # Auth state management
│   │   │   └── index.js         # Feature exports
│   │   ├── blog/                # Blog feature
│   │   │   └── [similar structure]
│   │   └── firebase/            # Firebase configuration
│   │       └── firebase.config.js
│   ├── hooks/                   # Custom React hooks
│   │   ├── useAuth.js           # Authentication hook
│   │   ├── useDebounce.js       # Debounce utility
│   │   └── useFetch.js          # Data fetching hook
│   ├── layouts/                 # Layout components
│   │   └── MainLayout.jsx       # Main app layout
│   ├── pages/                   # Page components
│   │   ├── Blogs.jsx            # Blog listing page
│   │   ├── Dashboard.jsx        # User dashboard
│   │   ├── Home.jsx             # Landing page
│   │   ├── Login.jsx            # Login page
│   │   ├── Pricing.jsx          # Pricing page
│   │   └── Services.jsx         # Services page
│   ├── routes/                  # Route configuration
│   │   └── AppRoutes.jsx        # Route definitions
│   ├── services/                # API services
│   │   ├── auth.service.js      # Authentication API
│   │   ├── blog.service.js      # Blog API
│   │   └── http.js              # HTTP client configuration
│   ├── store/                   # Global state management
│   │   ├── auth.store.js        # Auth state
│   │   ├── blog.store.js        # Blog state
│   │   └── index.js             # Store exports
│   ├── utils/                   # Utility functions
│   │   ├── debounce.js          # Debounce helper
│   │   ├── formatDate.js        # Date formatting
│   │   └── validators.js        # Input validators
│   ├── App.css                  # Global styles
│   ├── App.jsx                  # Root component
│   ├── constants.jsx            # App constants
│   ├── index.css                # Base styles
│   └── main.jsx                 # App entry point
├── .gitignore                   # Git ignore rules
├── eslint.config.js             # ESLint configuration
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── package-lock.json            # Dependency lock file
├── README.md                    # This file
└── vite.config.js               # Vite configuration
```

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **React Router**: Client-side routing
- **CSS3**: Modern styling with custom properties

### Backend & Services
- **Firebase**: Backend-as-a-Service
  - Authentication (Email/Password)
  - Firestore (NoSQL Database)
  - Hosting
- **Firebase SDK**: Real-time data sync

### Development Tools
- **ESLint**: Code linting
- **Vite**: Build tool
- **Git**: Version control

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js (v16.0.0 or higher)
- npm or yarn
- Git
- A Firebase account

## ⚙️ Installation

1. **Clone the repository**
```bash
git clone https://github.com/mdmahfuz307/DevSphere-Agency-Website.git
cd DevSphere-Agency-Website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication (Email/Password)
   - Create a Firestore database
   - Get your Firebase configuration

4. **Configure environment variables**

Create a `firebase.config.js` file in `src/features/firebase/`:

```javascript
// src/features/firebase/firebase.config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

5. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

The application will open at `http://localhost:5173`

## 🚀 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

## 🏗️ Architecture Overview

### Feature-Based Structure
The project follows a feature-based architecture where each major feature (auth, blog, etc.) contains:
- **Components**: UI components specific to the feature
- **Services**: API calls and data operations
- **Hooks**: Custom React hooks
- **Store**: State management logic
- **API**: External API integrations

### State Management
- **Context API**: For global state (Auth, Theme)
- **Local State**: For component-specific state
- **Custom Hooks**: For reusable stateful logic

### Routing Strategy
- **Public Routes**: Accessible to all users (Home, Services, Pricing)
- **Protected Routes**: Require authentication (Dashboard, Blog Management)
- **Auth Routes**: Redirect if already logged in (Login, Register)

## 🔐 Authentication Flow

1. User registers/logs in through forms
2. Firebase handles authentication
3. Auth state stored in Context
4. Protected routes check auth status
5. Unauthorized users redirected to login

## 📝 Key Features Implementation

### Authentication
- Email/password authentication via Firebase
- Protected route wrapper component
- Persistent login state
- Secure logout functionality

### Blog System
- Create and publish blog posts
- View blog listings
- Individual blog post pages
- Firebase Firestore for data storage

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Responsive navigation
- Touch-friendly UI elements

## 🎨 Styling Approach

- **CSS Modules**: Component-scoped styles
- **Custom Properties**: CSS variables for theming
- **Responsive Design**: Mobile-first breakpoints
- **Consistent Design System**: Reusable UI components
