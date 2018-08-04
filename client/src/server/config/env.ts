import { Env } from "./types";

// Booleans come in as strings from .env
declare const process: {
  ["env"]: {
    ["NODE_ENV"]: "production" | "development" | "testing";
    ["PROJECT_TITLE"]: string;
    ["FRONTEND_HOST"]: string;
    ["FRONTEND_PORT"]: number;
    ["BACKEND_HOST"]: string;
    ["BACKEND_PORT"]: number;
    ["HTTPS"]: "true" | "false";
    ["PUBLIC_PATH"]: string;
  };
};
const {
  NODE_ENV,
  PROJECT_TITLE,
  FRONTEND_HOST,
  FRONTEND_PORT,
  BACKEND_HOST,
  BACKEND_PORT,
  HTTPS,
  PUBLIC_PATH,
} = process.env;

export const env: Env = {
  NODE_ENV,
  PROJECT_TITLE,
  FRONTEND_HOST,
  FRONTEND_PORT,
  BACKEND_HOST,
  BACKEND_PORT,
  PUBLIC_PATH,
  HTTPS: HTTPS === "true",
};
