# Project Documentation

## Overview
This project is a Next.js application bootstrapped with [create-next-app](file:///d%3A/internships/Assignments/appwrite-auth-next/README.md#1%2C70-1%2C70). It integrates Appwrite for authentication and uses various libraries for styling and UI components.

## Getting Started

### Prerequisites
- Node.js
- npm, yarn, pnpm, or bun

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Environment Setup

1. Create a `.env.local` file in the root directory of your project.
2. Add the following environment variables to the `.env.local` file:

NEXT_PUBLIC_APPWRITE_ENDPOINT=<your-appwrite-endpoint>
NEXT_PUBLIC_APPWRITE_PROJECT=<your-appwrite-project-id>
NEXT_PUBLIC_DOMAIN=<your-domain>


3. Replace `<your-appwrite-endpoint>`, `<your-appwrite-project-id>`, and `<your-domain>` with your actual Appwrite endpoint, project ID, and domain respectively.

### Running the Development Server
Start the development server:


```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `app/auth/appwrite.js`: Contains Appwrite client setup and authentication functions.
- `app/page.js`: Main page file for the Next.js application.

## Authentication
The project uses Appwrite for authentication. The configuration is set up in `app/auth/appwrite.js`.

### Appwrite Configuration

```1:20:app/auth/appwrite.js
import { Client, Account } from "appwrite";

export const client = new Client();

client
  .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT}`)
  .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT}`);
export const account = new Account(client);
export { ID } from "appwrite";

export const checkLoggedIn = async () => {
  try {
    const user = await account.get();
    console.log("User is logged in:", user);
    return true;
  } catch (error) {
    console.log("No user is logged in");
    return false;
  }
};
```


### Check Logged In Status

```11:20:app/auth/appwrite.js
export const checkLoggedIn = async () => {
  try {
    const user = await account.get();
    console.log("User is logged in:", user);
    return true;
  } catch (error) {
    console.log("No user is logged in");
    return false;
  }
};
```


## Dependencies
The project uses the following dependencies:
- `@emotion/react`
- `@emotion/styled`
- `@mui/material`
- `appwrite`
- `next`
- `react`
- `react-dom`
- `react-hot-toast`

For a complete list of dependencies, refer to `package-lock.json`.

## Deployment
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More
To learn more about Next.js, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
