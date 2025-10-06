![React Logo](https://github.com/vercel/vercel/blob/master/packages/frameworks/logos/react.svg)

# React + Firebase Authentication + Go API

🔥 A modern, secure web application with **Firebase Authentication** (one of the most popular open-source authentication frameworks), React frontend, and Go serverless backend.

## ✨ Features

- 🔐 **Firebase Authentication** - Secure user authentication
- 📧 **Email/Password Login** - Traditional email-based authentication
- 🌐 **Google OAuth** - Sign in with Google
- ⚡ **Go Serverless API** - Fast, efficient backend with Go
- 🎨 **Modern UI** - Beautiful, responsive design
- 🔒 **Protected Routes** - Authenticated API requests
- 🚀 **Zero Configuration Deployment** - Deploy to Vercel with one click

## 🚀 Quick Start

### Prerequisites

- Node.js 14+ installed
- Firebase account ([Create one free](https://console.firebase.google.com/))
- Vercel account (optional, for deployment)

### Installation

1. **Clone and install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication → Email/Password and Google sign-in methods
   - Copy your Firebase configuration

3. **Configure environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Add your Firebase credentials to `.env`:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** 🎉

## 📚 Documentation

For detailed setup instructions, see [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md)

## 🛠 Tech Stack

- **Frontend:** React 16.6+
- **Authentication:** Firebase Authentication
- **Backend:** Go (Serverless Functions)
- **Deployment:** Vercel
- **Styling:** Custom CSS

## 📁 Project Structure

```
.
├── api/
│   ├── auth.go          # Authentication middleware
│   ├── date.go          # Example API endpoint
│   └── go.mod           # Go dependencies
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Login.js
│   │   ├── Register.js
│   │   └── Dashboard.js
│   ├── contexts/        # React contexts
│   │   └── AuthContext.js
│   ├── styles/          # CSS files
│   ├── firebase.js      # Firebase configuration
│   └── App.js           # Main app component
├── .env.example         # Environment variables template
└── package.json
```

## 🔐 Authentication Flow

1. User registers or logs in using email/password or Google OAuth
2. Firebase generates a secure ID token
3. Token is automatically included in API requests
4. Go backend validates the token (middleware in `api/auth.go`)
5. Protected content is served to authenticated users

## 🌐 Deploy Your Own

Deploy your own React + Firebase Auth project with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

**Important:** Add your Firebase environment variables in Vercel:
- Go to Project Settings → Environment Variables
- Add all `REACT_APP_FIREBASE_*` variables

## 📝 API Endpoints

- `GET /api/date` - Returns current server date (requires authentication)

## 🔧 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is [MIT](LICENSE) licensed.

## 🙏 Acknowledgments

- [Firebase](https://firebase.google.com/) - Authentication framework
- [React](https://reactjs.org/) - Frontend framework
- [Go](https://golang.org/) - Backend language
- [Vercel](https://vercel.com/) - Deployment platform
