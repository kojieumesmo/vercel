package handler

import (
	"context"
	"encoding/json"
	"net/http"
	"strings"
)

// ValidateFirebaseToken validates a Firebase ID token
// Note: For production use, you should use the Firebase Admin SDK
// This is a simplified version for demonstration
func ValidateFirebaseToken(r *http.Request) (map[string]interface{}, error) {
	authHeader := r.Header.Get("Authorization")
	if authHeader == "" {
		return nil, nil
	}

	// Extract token from "Bearer <token>"
	parts := strings.Split(authHeader, " ")
	if len(parts) != 2 || parts[0] != "Bearer" {
		return nil, nil
	}

	token := parts[1]
	
	// In production, you should verify the token using Firebase Admin SDK
	// For now, we'll just check if a token is present
	// To properly implement this, you would:
	// 1. Initialize Firebase Admin SDK with service account credentials
	// 2. Use admin.Auth().VerifyIDToken(context.Background(), token)
	// 3. Return the decoded token claims
	
	if token != "" {
		// Mock response - replace with actual Firebase Admin SDK verification
		return map[string]interface{}{
			"valid": true,
			"token": token,
		}, nil
	}

	return nil, nil
}

// WithAuth is a middleware that checks for valid authentication
func WithAuth(next http.HandlerFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		// Allow CORS
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}

		claims, err := ValidateFirebaseToken(r)
		if err != nil || claims == nil {
			// For development, we'll allow requests without auth
			// In production, you should uncomment the following lines:
			// w.WriteHeader(http.StatusUnauthorized)
			// json.NewEncoder(w).Encode(map[string]string{"error": "Unauthorized"})
			// return
		}

		// Add claims to context for use in handlers
		ctx := context.WithValue(r.Context(), "user", claims)
		next.ServeHTTP(w, r.WithContext(ctx))
	}
}
