# 🎬 Cineflix

> A modern movie discovery platform built with React, TypeScript, and Vite.

Cineflix is a responsive movie discovery application that allows users to explore movies, search for titles, browse categories, and discover detailed movie information through a clean, modern interface.

The project was built to strengthen practical frontend engineering skills including API integration, component architecture, state management, responsive UI development, asynchronous data handling, and production-oriented project structure.

---

## 🚀 Live Demo

**Live Application:** https://cineflix.appwrite.network/

**Repository:** https://github.com/nitishchandran/cineflix

---

## ✨ Features

- 🎥 Browse popular and trending movies
- 🔎 Search movies by title
- 📄 View detailed movie information
- 🎭 Browse movies by genre
- 📱 Fully responsive interface
- ⚡ Fast client-side navigation
- 🖼️ Dynamic movie posters and backdrops
- ⏳ Loading states for asynchronous requests
- ❌ Error handling for failed API requests
- 🔄 Dynamic data fetched from a movie API

---

## 🛠️ Tech Stack

### Frontend

- **React** — Component-based UI development
- **TypeScript** — Type-safe application development
- **Vite** — Fast development and production build tooling
- **React Router** — Client-side routing
- **CSS** — Responsive styling and UI design

### APIs

- **TMDB API** — Movie metadata, posters, ratings, genres, and related information

### Development

- **Git**
- **GitHub**
- **ESLint**
- **npm**

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    React Client     │
                    │                     │
                    │  Components         │
                    │  Pages              │
                    │  Routing            │
                    │  State              │
                    └──────────┬──────────┘
                               │
                               │ HTTPS
                               ▼
                    ┌─────────────────────┐
                    │      TMDB API       │
                    │                     │
                    │  Movies             │
                    │  Genres             │
                    │  Search             │
                    │  Metadata           │
                    └─────────────────────┘
```

The frontend is organized around reusable React components and communicates with the movie API through asynchronous HTTP requests.

---

## 📂 Project Structure

```text
cineflix/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   ├── MovieCard/
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Search/
│   │   ├── MovieDetails/
│   │   └── ...
│   │
│   ├── services/
│   │   └── api/
│   │
│   ├── hooks/
│   │
│   ├── types/
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

> The structure may evolve as the application grows.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/nitishchandran/cineflix.git
```

### 2. Navigate into the project

```bash
cd cineflix
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env.local` file:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

> Never commit API keys or other secrets to GitHub.

### 5. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🔑 API Configuration

Cineflix uses the [TMDB API](https://developer.themoviedb.org/) for movie information.

You will need to create a TMDB account and generate an API key.

Add the key to your local environment:

```env
VITE_TMDB_API_KEY=your_api_key_here
```

Environment variables are intentionally excluded from version control.

---

## 🧠 Engineering Decisions

### Why React?

React provides a component-based architecture that makes it easier to build reusable UI elements such as movie cards, navigation components, search interfaces, and movie detail views.

### Why TypeScript?

TypeScript provides compile-time type checking and makes API-driven applications easier to maintain by explicitly defining the shape of movie, genre, and API response data.

### Why Vite?

Vite provides a fast development experience with quick startup times and efficient hot module replacement.

### Why an external movie API?

Using a real-world API makes the application closer to a production frontend than relying entirely on static mock data.

---

## ⚡ Performance Considerations

The application is designed with frontend performance in mind.

Potential optimization areas include:

- Lazy loading routes
- Debouncing search requests
- Avoiding unnecessary API calls
- Reusing components
- Optimizing image loading
- Caching frequently requested data
- Code splitting

---

## 🧪 Testing

Testing is an important part of the project's production-readiness roadmap.

Planned/implemented testing areas include:

- Component rendering
- Search functionality
- API error states
- Navigation
- Movie detail rendering
- User interactions

Recommended testing stack:

```text
Vitest
React Testing Library
```

---

## 🔐 Security

Cineflix follows basic frontend security practices:

- API keys are stored in environment variables
- Secrets are excluded from Git
- User-controlled input is treated as untrusted data
- External API responses are validated before rendering where appropriate

> Note: API keys exposed to a browser application should be considered public. For a production architecture requiring secret protection, API calls should be proxied through a backend service.

---

## 📈 Future Improvements

The project can be extended into a complete movie platform.

### User Features

- [ ] User authentication
- [ ] User profiles
- [ ] Watchlist
- [ ] Favorites
- [ ] Recently viewed movies
- [ ] Movie ratings
- [ ] Personalized recommendations

### Backend

```text
React
   ↓
Spring Boot REST API
   ↓
PostgreSQL
```

Potential backend capabilities:

- [ ] Authentication & authorization
- [ ] User management
- [ ] Watchlists
- [ ] Favorites
- [ ] Ratings
- [ ] Search
- [ ] Movie caching
- [ ] API rate limiting

### Engineering

- [ ] Unit tests
- [ ] Integration tests
- [ ] CI/CD pipeline
- [ ] Docker
- [ ] Production monitoring
- [ ] API caching
- [ ] Performance monitoring

---

## 📸 Screenshots

### Home

_Add screenshot here._

### Movie Details

_Add screenshot here._

### Search

_Add screenshot here._

---

## 🗺️ Roadmap

```text
Phase 1
React + TypeScript
       ↓
Movie API Integration
       ↓
Search & Discovery
       ↓
Responsive UI
       ↓
────────────────────────

Phase 2
Authentication
       ↓
Watchlist
       ↓
Favorites
       ↓
User Profiles
       ↓
────────────────────────

Phase 3
Spring Boot Backend
       ↓
PostgreSQL
       ↓
Caching
       ↓
Testing
       ↓
CI/CD
       ↓
Production Deployment
```

---

## 💡 What I Learned

Building Cineflix provided practical experience with:

- React component architecture
- TypeScript
- REST API integration
- Asynchronous JavaScript
- Client-side routing
- Responsive frontend development
- API error handling
- Environment variable management
- Git and GitHub workflows
- Designing a frontend around real-world external data

---

## 👨‍💻 Author

**Nitish Chandran**

Software Developer | Full-Stack Engineering | AI-Powered Products

- GitHub: https://github.com/nitishchandran
- LinkedIn: Add LinkedIn profile

---

## 📄 License

This project is intended for educational and portfolio purposes.

---

⭐ If you found Cineflix interesting, consider starring the repository.
