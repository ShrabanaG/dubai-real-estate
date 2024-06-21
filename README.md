# Dubai Real Estate Project

Welcome to the Dubai Real Estate project repository! This project is a comprehensive web application designed to showcase real estate properties in Dubai, leveraging modern web development technologies. Below, you'll find detailed information about the project, including setup instructions, features, and technologies used.

## Project Overview

The Dubai Real Estate project aims to provide a user-friendly interface for browsing, searching, and filtering real estate listings in Dubai. The application includes features such as property details, image galleries, location maps, and contact information for agents.

## Live Demo

You can explore the live demo of the project [here](https://dubai-real-estate-eight.vercel.app/).

## Features

- **Property Listings**: Browse through a wide range of real estate properties in Dubai.
- **Advanced Search**: Filter properties based on various criteria such as price, location, and type.
- **Detailed Views**: View comprehensive details of each property including images, description, and location on the map.
- **Responsive Design**: Optimized for various devices, providing a seamless experience on both desktop and mobile.
- **CI/CD Pipeline**: Automated continuous integration and continuous deployment to Vercel for seamless updates.

## Technologies Used

- **Next.js**: A React framework for building fast and user-friendly web applications.
- **TypeScript**: Ensures type safety and enhances code quality.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Vercel**: Hosting platform for deploying the application.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (or yarn, pnpm, bun)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ShrabanaG/dubai-real-estate.git
   cd dubai-real-estate

   ```

2. Install dependencies:

   ```npm install
   # or
   yarn install
   # or
   pnpm install

   ```

3. Running the Development Server
   ```npm run dev # or
   yarn dev # or
   pnpm dev # or
   bun dev
   Open http://localhost:3000 with your browser to see the result.

### Project Structure

- **app/:** Contains the main application components and pages.
- **components/:** Reusable UI components.
- **styles/:** Static assets such as images.
- **public/:** Global and component-specific styles.
- **constants/:** Configuration constants.
- **tests/:** Test files for unit and integration testing.

### CI/CD Pipeline

The project is set up with a CI/CD pipeline using GitHub Actions to automate testing and deployment to Vercel. Each push to the main branch triggers the pipeline to run tests and, if successful, deploys the latest version of the application to Vercel, ensuring a smooth and reliable deployment process.
