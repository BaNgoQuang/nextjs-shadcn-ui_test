# Admin UI Project

## Overview

This is a simple Admin UI project built with Next.js (App Router), React Hook Form, Zod, Zustand, and Shadcn UI.  
The project includes the following main pages:

- **Homepage**: A landing page with navigation links to Dashboard and Settings.  
- **Dashboard**: Management page with a sidebar, statistic cards, and pending lists (Pending Suppliers, Pending Events, Reported Posts) designed using Shadcn UI components.  
- **Settings**: Account settings page featuring a form with validation using React Hook Form + Zod, and form state persistence using Zustand.  
- **Dark Mode**: A toggle for light/dark themes managed globally and applied across the entire app.

## Technologies Used

- Next.js 13 (App Router)  
- React 18+  
- Tailwind CSS  
- Shadcn UI (Card, Button, Input, Switch, Dialog, etc.)  
- React Hook Form + Zod for form validation  
- Zustand for state management  

## Installation and Running Locally

1. **Clone the repository**

```bash
git clone https://github.com/BaNgoQuang/nextjs-shadcn-ui_test
cd nextjs-shadcn-ui_test

2. **Install dependencies**
npm install

3. **Run the development server**
npm run dev

4. **Open the app in your browser**
http://localhost:3000


Project Structure

app/: Next.js App Router pages and layouts

components/: Shared UI components (Navbar, Sidebar, ClientProviders, etc.)

store/: Zustand store for managing application state

styles/: Global CSS and Tailwind configuration

Notes
The dark mode toggle is located in the navbar and applies globally throughout the app.

The Settings form saves input state via Zustand, so data persists across page navigation and reloads.

UI elements are consistently styled using Shadcn UI components.

For any questions or feedback, please feel free to reach out.