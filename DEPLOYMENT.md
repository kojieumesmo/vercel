# Deployment Guide

## 🚀 Deploying to Vercel

Your code has been successfully pushed to GitHub! Now let's deploy it to Vercel.

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Go to [Vercel Dashboard](https://vercel.com/new)**

2. **Import your repository:**
   - Click "Add New..." → "Project"
   - Select your GitHub repository: `kojieumesmo/vercel`
   - Click "Import"

3. **Configure your project:**
   - **Framework Preset:** Vercel will auto-detect "Create React App"
   - **Root Directory:** Leave as `./` (root)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `build` (auto-detected)

4. **Add Environment Variables:**
   Before deploying, add your Firebase configuration:
   
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key_here
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

5. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete (usually 2-3 minutes)
   - Your app will be live at `https://your-app.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Login to Vercel:**
   ```bash
   vercel login
   ```

2. **Deploy:**
   ```bash
   vercel --prod
   ```
   
3. **Set environment variables:**
   ```bash
   vercel env add REACT_APP_FIREBASE_API_KEY
   vercel env add REACT_APP_FIREBASE_AUTH_DOMAIN
   vercel env add REACT_APP_FIREBASE_PROJECT_ID
   vercel env add REACT_APP_FIREBASE_STORAGE_BUCKET
   vercel env add REACT_APP_FIREBASE_MESSAGING_SENDER_ID
   vercel env add REACT_APP_FIREBASE_APP_ID
   ```

4. **Redeploy with environment variables:**
   ```bash
   vercel --prod
   ```

## 🔥 Firebase Setup for Production

After deploying to Vercel, you need to configure Firebase:

1. **Add your Vercel domain to Firebase Authorized Domains:**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Navigate to **Authentication** → **Settings** → **Authorized domains**
   - Click "Add domain"
   - Add your Vercel domain (e.g., `your-app.vercel.app`)
   - Add any custom domains you've configured

2. **Test your authentication:**
   - Visit your deployed app
   - Try registering a new account
   - Try logging in with Google
   - Verify that the dashboard loads correctly

## ⚙️ Vercel Configuration (Optional)

The app works with zero configuration, but you can create a `vercel.json` for custom settings:

```json
{
  "version": 2,
  "name": "react-firebase-auth",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    },
    {
      "src": "api/**/*.go",
      "use": "@vercel/go"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "env": {
    "REACT_APP_FIREBASE_API_KEY": "@firebase_api_key",
    "REACT_APP_FIREBASE_AUTH_DOMAIN": "@firebase_auth_domain",
    "REACT_APP_FIREBASE_PROJECT_ID": "@firebase_project_id",
    "REACT_APP_FIREBASE_STORAGE_BUCKET": "@firebase_storage_bucket",
    "REACT_APP_FIREBASE_MESSAGING_SENDER_ID": "@firebase_messaging_sender_id",
    "REACT_APP_FIREBASE_APP_ID": "@firebase_app_id"
  }
}
```

## 🔍 Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version compatibility
- Check build logs in Vercel dashboard

### Authentication Not Working
- Verify all Firebase environment variables are set
- Check Firebase Authorized Domains includes your Vercel domain
- Ensure Firebase Authentication methods are enabled

### API Endpoints Not Working
- Verify Go files are in the `api/` directory
- Check Vercel function logs
- Ensure API routes don't conflict with frontend routes

## 📊 Monitoring

After deployment, monitor your app:

1. **Vercel Analytics:**
   - Go to your project dashboard
   - Check the "Analytics" tab
   - Monitor page views, performance, and errors

2. **Firebase Console:**
   - Monitor authentication usage
   - Check for authentication errors
   - Review user activity

## 🎉 Success!

Once deployed, your app will be live with:
- ✅ Firebase Authentication (Email/Password + Google OAuth)
- ✅ Protected dashboard
- ✅ Go serverless API
- ✅ Automatic SSL/HTTPS
- ✅ Global CDN distribution
- ✅ Automatic deployments on git push

Share your deployed app URL and start authenticating users! 🚀
