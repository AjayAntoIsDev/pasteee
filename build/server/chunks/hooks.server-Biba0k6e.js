import { d as deleteExpiredPastes } from './services-15rVoUQw.js';
import cron from 'node-cron';
import './index-Ddp2AB5f.js';
import './prisma-D9xrZjJk.js';
import '@prisma/client';

async function handle({ event, resolve }) {
  const searchParams = event.url.searchParams;
  if (searchParams.get("r") !== null || searchParams.get("raw") !== null) {
    event.request.headers.set("Accept", "text/plain");
  }
  return await resolve(event);
}
cron.schedule("*/5 * * * *", async () => {
  await deleteExpiredPastes();
});

export { handle };
//# sourceMappingURL=hooks.server-Biba0k6e.js.map
