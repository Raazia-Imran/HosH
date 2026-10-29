import { createStartHandler, defaultStreamHandler } from "@tanstack/react-start/server";
import { contentSecurityPolicy } from "./security-policy";

const handler = createStartHandler(defaultStreamHandler);

export default {
  async fetch(request: Request) {
    const nonce = crypto.randomUUID().replaceAll("-", "");
    // Overwrite any client supplied value. The router needs this before SSR hydration is prepared.
    request.headers.set("x-hosh-csp-nonce", nonce);
    const response = await handler(request);
    const headers = new Headers(response.headers);
    if (!import.meta.env.DEV) {
      headers.set("Content-Security-Policy", contentSecurityPolicy(nonce));
      headers.set("Cache-Control", "private, no-store");
    }
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
