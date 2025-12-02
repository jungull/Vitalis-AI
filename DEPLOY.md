# Deployment Guide

This project is built with Vite and React. The easiest way to deploy it is using Vercel or Netlify.

## Important: Environment Variables

This application requires an API Key to function. You must set the following environment variable in your deployment settings:

-   **Key:** `GEMINI_API_KEY`
-   **Value:** (Your Google Gemini API Key)

## Option 1: Vercel (Recommended)

1.  Create an account at [vercel.com](https://vercel.com).
2.  Install the Vercel CLI (optional but recommended):
    ```bash
    npm i -g vercel
    ```
3.  Run the deploy command from the project root:
    ```bash
    npx vercel
    ```
4.  Follow the prompts:
    -   Set up and deploy? **Y**
    -   Which scope? (Select your account)
    -   Link to existing project? **N**
    -   Project name? (Press Enter for default)
    -   In which directory is your code located? **./**
    -   Want to modify these settings? **N**

5.  **After Deployment:**
    -   Go to your Vercel Project Dashboard.
    -   Click on **Settings** > **Environment Variables**.
    -   Add a new variable:
        -   Key: `GEMINI_API_KEY`
        -   Value: `your_actual_api_key_here`
    -   **Redeploy** your application (or trigger a new build) for the changes to take effect.

## Option 2: Netlify

1.  Create an account at [netlify.com](https://netlify.com).
2.  Drag and drop the `dist` folder (created after running `npm run build`) into the Netlify dashboard.
    -   *Note: You must run `npm run build` first!*
3.  **After Deployment:**
    -   Go to **Site configuration** > **Environment variables**.
    -   Add `GEMINI_API_KEY` with your key value.

## Option 3: Manual / Other Hosting

1.  Run the build command:
    ```bash
    npm run build
    ```
2.  The output will be in the `dist` folder.
3.  Upload the contents of the `dist` folder to your web server (e.g., Apache, Nginx).
4.  **Important:** Configure your server to redirect all 404 requests to `index.html` to support client-side routing.
