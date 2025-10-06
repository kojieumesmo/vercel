# Firebase Authentication Setup Instructions

This application uses **Firebase Authentication** for secure user login and registration.

## 🔥 Firebase Setup

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select an existing project
3. Follow the setup wizard to create your project

### 2. Enable Authentication Methods

1. In the Firebase Console, go to **Build** → **Authentication**
2. Click on the **Sign-in method** tab
3. Enable the following providers:
   - **Email/Password**: Click to enable
   - **Google**: Click to enable and configure OAuth consent screen

### 3. Get Your Firebase Configuration

1. In the Firebase Console, click the gear icon ⚙️ next to "Project Overview"
2. Select **Project settings**
3. Scroll down to **Your apps** section
4. Click on the **Web app** icon `</>` to add a web app (if you haven't already)
5. Register your app with a nickname
6. Copy the Firebase configuration object

### 4. Configure Your Application

1. Create a `.env` file in the root directory (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. Add your Firebase configuration to `.env`:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key_here
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

### 5. Configure Authorized Domains

1. In Firebase Console → **Authentication** → **Settings** → **Authorized domains**
2. Add your domains:
   - `localhost` (for development)
   - Your Vercel deployment domain (e.g., `your-app.vercel.app`)

## 🚀 Running the Application

### Development

```bash
npm install
npm run dev
```

The app will run on `http://localhost:3000`

### Production (Vercel)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel:
   - Go to Project Settings → Environment Variables
   - Add all `REACT_APP_FIREBASE_*` variables from your `.env` file
4. Deploy!

## 🔐 Security Notes

### For Production Use

The current implementation includes basic authentication flow. For production:

1. **Backend Token Verification**: Install Firebase Admin SDK in your Go backend:
   ```bash
   go get firebase.google.com/go/v4
   ```

2. **Implement proper token verification** in `api/auth.go`:
   ```go
   import (
       firebase "firebase.google.com/go/v4"
       "firebase.google.com/go/v4/auth"
   )
   
   // Initialize Firebase Admin
   app, err := firebase.NewApp(context.Background(), nil)
   client, err := app.Auth(context.Background())
   
   // Verify token
   token, err := client.VerifyIDToken(ctx, idToken)
   ```

3. **Environment Variables**: Never commit your `.env` file or expose Firebase config in public repositories

4. **Firebase Security Rules**: Configure appropriate security rules for your Firebase services

## 📚 Features Implemented

✅ Email/Password Authentication  
✅ Google OAuth Sign-in  
✅ Protected Routes  
✅ User Session Management  
✅ Logout Functionality  
✅ Token-based API Authentication  
✅ Modern, Responsive UI  
✅ Error Handling  

## 🛠 Tech Stack

- **Frontend**: React 16.6+
- **Authentication**: Firebase Authentication
- **Backend**: Go (Serverless Functions)
- **Deployment**: Vercel
- **Styling**: Custom CSS with modern design

## 📖 Additional Resources

- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Firebase Admin SDK for Go](https://firebase.google.com/docs/admin/setup#go)
- [Vercel Deployment Docs](https://vercel.com/docs)

## 🤝 Support

If you encounter any issues:
1. Check that all environment variables are correctly set
2. Verify Firebase project configuration
3. Ensure authentication methods are enabled in Firebase Console
4. Check browser console for detailed error messages
