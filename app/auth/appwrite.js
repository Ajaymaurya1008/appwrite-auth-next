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
