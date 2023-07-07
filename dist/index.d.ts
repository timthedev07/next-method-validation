import { NextApiHandler } from "next";
export type HTTPMethodType = "PUT" | "DELETE" | "POST" | "GET" | "HEAD" | "CONNECT" | "TRADE" | "PATCH" | "OPTIONS";
export declare const withMethodValidation: (handler: NextApiHandler, method: HTTPMethodType, customMessage?: string, customStatusCode?: number) => NextApiHandler;
//# sourceMappingURL=index.d.ts.map