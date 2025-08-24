# Nordicescape

## Overview
Nordicescape is a web application built using Next.js and Tailwind CSS. It provides a platform for users to explore deals, read blog posts, and manage their dashboard effectively.

## Project Structure
The project is organized into several key directories and files:

- **pages/**: Contains the application's route components.
  - `index.js`: Main entry point for the homepage.
  - `deals.js`: Displays a list of deals.
  - `blog/[slug].js`: Renders individual blog posts based on the slug.
  - `dashboard/`: Contains dashboard-related pages.
    - `index.js`: Main dashboard view.
    - `add-deal.js`: Interface for adding new deals.

- **components/**: Contains reusable UI components.
  - `GlassCard.js`: A card component with a glassmorphism effect.
  - `Navbar.js`: Navigation bar component.
  - `DashboardLayout.js`: Layout component for dashboard pages.

- **public/**: Contains static assets like images.
  - `images/`: Directory for image files.

- **styles/**: Contains global styles for the application.
  - `globals.css`: Global CSS styles.

- **lib/**: Contains utility files.
  - `supabase.js`: Configuration for connecting to Supabase.

- **next.config.js**: Configuration settings for the Next.js application.

- **tailwind.config.js**: Configuration for Tailwind CSS.

- **package.json**: Lists project dependencies and scripts.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd nordicescape
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Run the development server:
   ```
   npm run dev
   ```
5. Open your browser and visit `http://localhost:3000` to view the application.

## Features
- Explore various deals and offers.
- Read and interact with blog posts.
- Manage your dashboard with ease, including adding new deals.

## Usage
This application is designed to be user-friendly, allowing users to navigate through different sections seamlessly. The dashboard provides a centralized location for managing deals, while the blog section offers insightful content.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.