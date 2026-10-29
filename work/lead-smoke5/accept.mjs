import { hello } from './hello.mjs';
import assert from 'node:assert/strict';

// G3: 按老板原话的 import 形态真跑
const r1 = hello('World');
assert.strictEqual(r1, 'hello, World', 'G3: basic return mismatch');

// G4: 返回值码位级断言（分隔符用 charCode，不靠数空格）
const commaIndex = r1.indexOf(',');
assert.ok(commaIndex > 0, 'G4: no comma found');
assert.strictEqual(r1.charCodeAt(commaIndex + 1), 32, 'G4: space after comma is not 0x20');

// G9: 判据非恒真——负向对照（变异体）
try {
  assert.strictEqual(hello(''), 'hello, ', 'G9: empty name should still work');
} catch (e) {
  console.error('G9 FAIL: empty name handling broken', e.message);
  process.exit(1);
}

console.log('ALL GATES PASSED');
