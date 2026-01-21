# MERN Chatbot + Face Recognition

This repository scaffolds a MERN application that integrates a chatbot and a face recognition workflow.

## Structure

- `server/`: Express API with routes for chatbot messaging and face recognition analysis.
- `client/`: React UI that surfaces the chatbot experience and image analysis interface.

## Getting Started

```bash
# Start the API
cd server
npm install
npm run dev
```

```bash
# Start the client (in a new terminal)
cd client
npm install
npm start
```

## API Endpoints

- `POST /api/chatbot/message`: Send a message and receive a chatbot reply.
- `POST /api/face-recognition/analyze`: Upload an image to simulate face recognition output.

## Next Steps

- Swap the placeholder service logic with real NLP and ML models.
- Add database storage for conversations and analysis results.
- Configure proxying in the client or add a reverse proxy in production.
