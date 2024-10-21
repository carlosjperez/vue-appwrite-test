import { Client, Account, Databases } from "appwrite";

const { VITE_ENDPOINT, VITE_PROJECT_ID } = import.meta.env;

const client = new Client()
    .setEndpoint(VITE_ENDPOINT || "")
    .setProject(VITE_PROJECT_ID || "");

const account = new Account(client);
const databases = new Databases(client);

export { account, databases };
