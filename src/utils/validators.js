export function required(v){ return v != null && v !== ''; }
export function isEmail(v){ return /\S+@\S+\.\S+/.test(v); }
