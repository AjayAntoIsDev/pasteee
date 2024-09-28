import base64 from 'base64-js';

async function decrypt(ciphertext, ivStr, keyStr) {
  const decoder = new TextDecoder("utf-8");
  const iv = base64.toByteArray(ivStr);
  const alg = { name: "AES-GCM", iv, length: 256 };
  const key = await crypto.subtle.importKey(
    "raw",
    base64.toByteArray(keyStr),
    alg,
    false,
    ["decrypt"]
  );
  const dec = await crypto.subtle.decrypt(
    alg,
    key,
    base64.toByteArray(ciphertext)
  );
  return decoder.decode(dec);
}
async function decryptWithPassword(ciphertext, iv, password) {
  const encoder = new TextEncoder();
  const decoder = new TextDecoder("utf-8");
  const alg = { name: "AES-GCM", iv: base64.toByteArray(iv), length: 256 };
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"]
  );
  const key = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: await crypto.subtle.digest(
        "SHA-512",
        encoder.encode(password)
      ),
      iterations: 31e4,
      hash: "SHA-512"
    },
    keyMaterial,
    alg,
    false,
    ["decrypt"]
  );
  const dec = await crypto.subtle.decrypt(
    alg,
    key,
    base64.toByteArray(ciphertext)
  );
  return decoder.decode(dec);
}
async function hashPassword(password, salt) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  const hash = await crypto.subtle.digest("SHA-512", data);
  return base64.fromByteArray(new Uint8Array(hash));
}

export { decryptWithPassword as a, decrypt as d, hashPassword as h };
//# sourceMappingURL=crypto-DrYTebAt.js.map
