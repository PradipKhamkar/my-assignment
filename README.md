# MERN Stack Project

This is a full-stack MERN (MongoDB, Express, React, Node.js) web application project that includes authentication, product management, and category management functionalities. It also utilizes TypeScript, JWT for authentication, bcrypt for password hashing, Cloudnary for storing images, Tailwind CSS for styling, and React-table for data representation.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- User authentication with JWT tokens
- Secure password storage using bcrypt
- Product management (CRUD operations)
- Category management (CRUD operations)
- Responsive design with Tailwind CSS
- Data representation using React-table

## Technologies Used

- **Frontend:**

  - React with TypeScript
  - React-table for data representation
  - Tailwind CSS for styling

- **Backend:**
  - Node.js with Express
  - MongoDB for database
  - JWT for authentication
  - Bcrypt for password hashing
  - Cloudnary for storing images

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/PradipKhamkar/my-assignment.git
   cd my-assignment
   ```

2. Install dependencies for both the frontend and backend:

   ```bash
   npm install
   cd client
   npm install
   ```

## Configuration

You will need to set up environment variables for the project to function correctly. Create a `.env` file in the `server` directory and define the following variables:

```env
DB_URI = database_uri
JWT_SECRET_KEY = jwt_secret_key
PORT = port_number
COOKIES_EXPRIRY = cookies_expiry
CLOUD_NAME = cloudnary_cloud_name
CLOUD_API_KEY = cloudnary_api_key
CLOUD_API_SECRET_KEY = cloudnary_api_secret_key
```

## Usage

1. Start the project:

   ```bash
   npm run dev
   ```

The application should now be running at `http://localhost:${PORT}`.

## API Endpoints

- Authentication:

  - `/api/v1/user/login` - Log in an existing user
  - `/api/v1/getloggedUser` - Getting current logged user using JWT Token
  - `/api/v1/logout` - Logout current logged user

- Product Management:

  - `/api/v1/product/allProduct` - Get all products
  - `/api/v1/product/add` - Create a new product
  - `/api/v1/product/update/:productId` - Edit a product by ID
  - `/api/v1/product/delete/:productId` - Delete a product by ID

- Category Management:
  - `/api/v1//allCategory` - Get all categories
  - `/api/v1/category/add` - Create a new category
  - `/api/v1/category/update/:categoryId` - Edit a category by ID
  - `/api/v1/category/delete/:categoryId` - Delete a category by ID
