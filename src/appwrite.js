import { Client, Account } from "appwrite";

const { VITE_ENDPOINT, VITE_PROJECT_ID } = import.meta.env;

const client = new Client()
    .setEndpoint(VITE_ENDPOINT || "")
    .setProject(VITE_PROJECT_ID || "");

const account = new Account(client);

export { account };
