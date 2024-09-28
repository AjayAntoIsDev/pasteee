import { e as error } from './index-Ddp2AB5f.js';
import { p as prisma } from './prisma-D9xrZjJk.js';

async function getPaste(key) {
  let data = await prisma.paste.findUnique({
    where: { key },
    select: {
      content: true,
      encrypted: true,
      passwordProtected: true,
      initVector: true,
      language: true,
      expiresCount: true,
      readCount: true,
      ownerId: true
    }
  });
  if (!data)
    error(404, "Not found");
  data = await prisma.paste.update({
    where: { key },
    data: { readCount: { increment: 1 } }
  });
  const { expiresCount, readCount } = data;
  if (expiresCount !== null && expiresCount < readCount) {
    await prisma.paste.delete({ where: { key } });
    error(404, "Not found");
  }
  const {
    content,
    encrypted,
    passwordProtected,
    initVector,
    language,
    ownerId
  } = data;
  return {
    key,
    content,
    encrypted,
    passwordProtected,
    initVector,
    language,
    ownerId
  };
}
async function deleteExpiredPastes() {
  await prisma.paste.deleteMany({
    where: {
      expiresAt: {
        lt: /* @__PURE__ */ new Date()
      }
    }
  });
}

export { deleteExpiredPastes as d, getPaste as g };
//# sourceMappingURL=services-15rVoUQw.js.map
