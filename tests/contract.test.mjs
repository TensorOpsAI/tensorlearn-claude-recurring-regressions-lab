import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeCustomerCode } from '../src/customer-code.mjs';
import { createClaimsClient } from '../src/claims-client.mjs';
test('current schema and old schema',()=>{
 assert.equal(normalizeCustomerCode(' cus-000123 '),'CUS-000123');
 assert.throws(()=>normalizeCustomerCode('CUST-1234'));
});
test('per-customer cache expires at the exact boundary',async()=>{
 let calls=0,time=0;
 const client=createClaimsClient(async code=>({code,version:++calls}),{now:()=>time});
 await client.get('CUS-000123');time=29999;await client.get('CUS-000123');assert.equal(calls,1);
 time=30000;await client.get('CUS-000123');assert.equal(calls,2);
});
