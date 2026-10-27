import test from 'node:test';
import assert from 'node:assert/strict';
import { createClaimsClient } from '../src/claims-client.mjs';
test('client exports a get method',()=>assert.equal(typeof createClaimsClient(async()=>({})).get,'function'));
