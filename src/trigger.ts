import { TriggerClient } from "@trigger.dev/sdk";

export const client = new TriggerClient({
  id: "payment-6WCH",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});
