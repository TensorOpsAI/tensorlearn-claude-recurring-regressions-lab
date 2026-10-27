export function normalizeCustomerCode(value) {
  if (typeof value !== 'string') throw new TypeError('Customer code must be text');
  const code=value.trim().toUpperCase();
  if (!/^CUS-[0-9]{6}$/.test(code)) throw new TypeError('Invalid customer code');
  return code;
}
