#!/bin/bash

# Church Explorer - Complete Deployment Script
# This script deploys both the frontend (GitHub Pages) and backend API (Vercel)

set -e  # Exit on any error

echo "🚀 Church Explorer Deployment Script"
echo "===================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -d "churchexplorer" ]; then
    echo -e "${RED}Error: Must run from the root of the churchexplorer repository${NC}"
    exit 1
fi

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Check prerequisites
echo "📋 Checking prerequisites..."

if ! command_exists node; then
    echo -e "${RED}Error: Node.js is not installed${NC}"
    exit 1
fi

if ! command_exists npm; then
    echo -e "${RED}Error: npm is not installed${NC}"
    exit 1
fi

if ! command_exists git; then
    echo -e "${RED}Error: git is not installed${NC}"
    exit 1
fi

echo -e "${GREEN}✓ All prerequisites met${NC}"
echo ""

# Ask user what they want to deploy
echo "What would you like to deploy?"
echo "1) Frontend only (GitHub Pages)"
echo "2) Backend API only (Vercel)"
echo "3) Both frontend and backend"
read -p "Enter choice (1-3): " DEPLOY_CHOICE

# Deploy Backend API to Vercel
deploy_backend() {
    echo ""
    echo "🔧 Deploying Backend API to Vercel..."
    echo "======================================"
    
    if ! command_exists vercel; then
        echo -e "${YELLOW}Vercel CLI not found. Installing...${NC}"
        npm install -g vercel
    fi
    
    # Check if user is logged in to Vercel
    if ! vercel whoami >/dev/null 2>&1; then
        echo "Please log in to Vercel:"
        vercel login
    fi
    
    echo ""
    echo "Deploying to Vercel..."
    vercel --prod
    
    echo ""
    echo -e "${GREEN}✓ Backend API deployed to Vercel${NC}"
    echo ""
    echo -e "${YELLOW}IMPORTANT: Copy your Vercel deployment URL and update the .env file:${NC}"
    echo "1. Open churchexplorer/.env"
    echo "2. Update REACT_APP_AI_API_ENDPOINT to your Vercel URL"
    echo "   Example: REACT_APP_AI_API_ENDPOINT=https://your-app.vercel.app/api/ai"
    echo ""
    echo -e "${YELLOW}Also, make sure to set the environment variable in Vercel:${NC}"
    echo "1. Go to your Vercel project dashboard"
    echo "2. Settings → Environment Variables"
    echo "3. Add: REACT_APP_OPENAI_API_KEY = your_openai_key"
    echo ""
    read -p "Press Enter when you've updated the .env file..."
}

# Deploy Frontend to GitHub Pages
deploy_frontend() {
    echo ""
    echo "🌐 Deploying Frontend to GitHub Pages..."
    echo "========================================"
    
    # Navigate to frontend directory
    cd churchexplorer
    
    # Install dependencies if needed
    if [ ! -d "node_modules" ]; then
        echo "Installing dependencies..."
        npm install
    fi
    
    # Build the app
    echo "Building the app..."
    npm run build
    
    # Deploy to GitHub Pages
    echo "Deploying to GitHub Pages..."
    npm run deploy
    
    cd ..
    
    echo ""
    echo -e "${GREEN}✓ Frontend deployed to GitHub Pages${NC}"
    echo ""
    echo "Your site should be live at: https://www.churchexplorer.org"
    echo "Give it a few minutes to propagate."
}

# Execute based on user choice
case $DEPLOY_CHOICE in
    1)
        deploy_frontend
        ;;
    2)
        deploy_backend
        ;;
    3)
        deploy_backend
        deploy_frontend
        ;;
    *)
        echo -e "${RED}Invalid choice. Exiting.${NC}"
        exit 1
        ;;
esac

echo ""
echo "================================================"
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo "================================================"
echo ""
echo "Next steps:"
echo "1. Visit your site: https://www.churchexplorer.org"
echo "2. Test the AI lesson generation feature"
echo "3. Check Vercel logs if you encounter API errors"
echo "4. Monitor OpenAI usage at https://platform.openai.com/usage"
echo ""
echo "Troubleshooting:"
echo "- Frontend issues: Check browser console"
echo "- API issues: Check Vercel logs at https://vercel.com/dashboard"
echo "- Firestore issues: Check Firebase console"
echo ""
