
---

# Programming Quiz Hosted

Welcome to the **Programming Quiz Hosted** project! This platform is a robust solution for programming enthusiasts to test and enhance their knowledge through interactive quizzes on various programming languages and concepts. Designed with a modern tech stack, it offers a seamless experience for both users and administrators.

---

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About the Project

The **Programming Quiz Hosted** project is a full-stack web application designed to:

- Allow users to register and log in securely.
- Provide a variety of programming quizzes covering languages like Java, C++, Python, JavaScript, and more.
- Offer an engaging platform to track progress and learn programming concepts interactively.
- Provide an admin interface for managing quizzes and users.

---

## Features

- **Authentication System**: Secure registration and login using **Node.js** and **JWT**.
- **Quiz Management**: Admins can create, update, and delete quizzes.
- **Responsive Design**: Optimized for both desktop and mobile devices using modern CSS techniques.
- **User Dashboard**: Track quiz progress and view performance history.
- **Dynamic Content**: Quizzes are fetched from a **MongoDB** database, ensuring flexibility and scalability.
- **Interactive UI**: Built with **Next.js**, the interface ensures a smooth, dynamic user experience.
- **Randomized Questions**: Every quiz session has questions in a randomized order.

---

## Technologies Used

### Frontend:
- **Next.js**: For server-side rendering and dynamic content.
- **HTML, CSS, JavaScript**: For styling and interactivity.

### Backend:
- **Node.js**: Backend server with Express.js.
- **MongoDB**: NoSQL database for storing quizzes and user information.

### Authentication:
- **JWT** (JSON Web Token): For secure user authentication.

### Hosting:
- **Vercel**: Frontend hosting.
- **MongoDB Atlas**: Cloud database hosting.

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16.x or later)
- **npm** (v8.x or later)
- **MongoDB** (local or cloud via MongoDB Atlas)

---

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Pravin2004P/programming-quiz-hosted.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd programming-quiz-hosted
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env.local` file in the root directory and include:

   ```env
   DATABASE_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
   JWT_SECRET=your_secret_key
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. Open your browser and visit `http://localhost:3000`.

---

## Usage

### For Users:
1. Register with a valid email and password.
2. Log in to access quizzes.
3. Attempt quizzes and track your progress on the dashboard.

### For Admins:
1. Log in with admin credentials.
2. Manage quizzes and user accounts via the admin panel.

---

## Project Structure

```
programming-quiz-hosted/
├── public/             # Static files (images, CSS, etc.)
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Next.js pages
│   ├── services/       # API service files
│   ├── styles/         # Global and component-specific styles
│   └── utils/          # Utility functions
├── models/             # MongoDB models
├── routes/             # Express.js route handlers
├── .env.local          # Environment variables
├── app.js              # Backend server file
├── package.json        # Project metadata and dependencies
└── README.md           # Documentation
```

---

## Contributing

We welcome contributions! Follow these steps:

1. **Fork the repository**.
2. Create a new branch:

   ```bash
   git checkout -b feature/YourFeature
   ```

3. Commit your changes:

   ```bash
   git commit -m "Add YourFeature"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/YourFeature
   ```

5. Open a **Pull Request**.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

```text
MIT License

Copyright (c) 2024 Pravin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## Contact

For any questions or suggestions:

- **Email**: pravinson222@gmail.com
- **YouTube**: [Programming with Pravin](https://youtube.com/@programmingwithpravin?si=5iCZX5ykjgYa5Fn4e)
- **Instagram**: [its.pravin.2004](https://instagram.com/its.pravin.2004)

---
