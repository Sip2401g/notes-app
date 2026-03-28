# 📝 Notes App

A full stack notes application built with the MERN stack (MongoDB, Express, React, Node.js).

## Tech Stack

### Frontend
- React.js
- Axios
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

## Features
- ✅ Create notes with title and content
- ✅ Pick note colors
- ✅ Pin important notes to the top
- ✅ Edit and delete notes
- ✅ Search notes in real time
- ✅ Responsive grid layout

## Project Structure
```
notes-app/
├── backend/
│   ├── src/
│   │   ├── models/       # MongoDB schemas
│   │   ├── routes/       # API endpoints
│   │   ├── middleware/   # Error handling
│   │   ├── app.js        # Express setup
│   │   └── server.js     # Entry point
│   └── .env
└── frontend/
    └── src/
        ├── api/          # Axios API calls
        ├── components/   # React components
        ├── App.js        # Main component
        └── index.js      # Entry point
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/notes | Get all notes |
| GET | /api/notes/:id | Get single note |
| POST | /api/notes | Create a note |
| PUT | /api/notes/:id | Update a note |
| DELETE | /api/notes/:id | Delete a note |
| PATCH | /api/notes/:id/pin | Toggle pin |

## Run Locally

### Backend
```bash
cd backend
npm install
# create .env with MONGO_URI and PORT
npm run dev
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Environment Variables

### Backend `.env`
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/notes-app
```
