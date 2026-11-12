import assert from 'node:assert/strict';
import { brotliCompressSync, brotliDecompressSync } from 'node:zlib';
const [major, minor, patch] = process.versions.node.split('.').map(Number);
assert.ok(major === 24 && (minor > 22 || (minor === 22 && patch >= 3)), `Node 24.22.3+ required: ${process.version}`);
const input = Buffer.from('Brotli regression');
assert.deepEqual(brotliDecompressSync(brotliCompressSync(input)), input);
console.log(process.version, 'runtime security baseline PASS');
