# GitHub Profile Analyzer

A simple backend project that analyzes GitHub user profiles using the GitHub Public API and stores useful insights in MongoDB.

## Features

* Analyze GitHub profiles using username
* Fetch data from GitHub Public API
* Store analyzed profiles in MongoDB
* Calculate useful profile insights
* Search saved profiles
* Fetch all analyzed profiles
* Fetch single profile details
* Update existing profile data automatically

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* GitHub API
* Axios

---

## Project Structure

```txt
github-profile-analyzer/
│
├── controllers/
├── models/
├── routes/
├── utils/
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/shashank2359/github-profile-analyzer.git
```

Move into project folder:

```bash
cd github-profile-analyzer
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root folder and add:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

GITHUB_TOKEN=your_github_token
```

---

## Run Project

Start development server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

---

## API Endpoints

### Analyze GitHub Profile

POST `/api/github/analyze/:username`

Example:

```txt
/api/github/analyze/octocat
```

---

### Get All Profiles

GET `/api/github/profiles`

---

### Get Single Profile

GET `/api/github/profiles/:username`

---

### Search Profiles

GET `/api/github/search?username=oct`

---

## Sample Features Calculated

* Followers count
* Following count
* Public repositories
* Total stars
* Total forks
* Most used language
* Account creation date

---

## Live API

https://github-profile-analyzer-wl3o.onrender.com

---

## GitHub Repository

https://github.com/shashank2359/github-profile-analyzer

---

## Author

Shashank

---

## Future Improvements

* Pagination
* Better filtering
* Frontend dashboard
* Authentication
* More GitHub analytics
