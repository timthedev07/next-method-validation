import { NextApiHandler } from "next";

export type HTTPMethodType =
  | "PUT"
  | "DELETE"
  | "POST"
  | "GET"
  | "HEAD"
  | "CONNECT"
  | "TRADE"
  | "PATCH"
  | "OPTIONS";

export const withMethodValidation = (
  handler: NextApiHandler,
  method: HTTPMethodType,
  customMessage?: string,
  customStatusCode?: number
): NextApiHandler => {
  return async (req, res) => {
    if (!req.method || req.method.toUpperCase() !== method) {
      res
        .status(customStatusCode || 405)
        .send(customMessage || "Method not allowed");
      return;
    }

    handler(req, res);
  };
};
