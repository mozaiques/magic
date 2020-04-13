import { openDB } from "idb";

const DB_NAME = "magic-db";
const DB_VERSION = 1;
const STORE_NAME = "magic-store";

const FIRST_TAB_REGISTERED_KEY = "firstTabRegistered";
let isFirstTab: boolean | undefined;

export const getDB = async () =>
  await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      db.createObjectStore(STORE_NAME);
    },
  });

export const tryRegisterFirstTab = async (): Promise<boolean> => {
  if (isFirstTab !== undefined) {
    return isFirstTab;
  }

  const db = await getDB();
  const tx = db.transaction(STORE_NAME, "readwrite");

  const isFirstTabAlreadyRegistered = window.localStorage.getItem(FIRST_TAB_REGISTERED_KEY);
  if (isFirstTabAlreadyRegistered !== null) {
    isFirstTab = false;
    return false;
  }

  window.localStorage.setItem(FIRST_TAB_REGISTERED_KEY, "true");
  isFirstTab = true;

  window.addEventListener("beforeunload", () => {
    window.localStorage.removeItem(FIRST_TAB_REGISTERED_KEY);
  });

  await tx.done;
  return true;
};
