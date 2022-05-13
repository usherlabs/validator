import pkg from "../package.json";

export const isProd = process.env.NODE_ENV === "production";
export const appName = `${pkg.name}@${pkg.version}`;
export const logLevel = process.env.LOG_LEVEL || "info";
