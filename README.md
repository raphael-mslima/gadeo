# Gadeo

This repository contains the source code for both the mobile front-end and the Node.js back-end.

## Prerequisites

- Node.js 18 or newer
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

## Front-end (React Native with Expo)

The React Native project lives in `frontend/`.

### Setup

```bash
cd frontend
npm install
```

### Running

Start the Expo development server:

```bash
npm start
```

Use `npm run android`, `npm run ios` or `npm run web` to open the app on a device or emulator.

## Back-end (Node.js)

The Node.js back-end lives in `backend/`.

### Setup

```bash
cd backend
npm install
```

### Running

```bash
npm run dev
```

This will start an Express server on port `3000`.

## Testing

There are currently no automated tests for either project.
