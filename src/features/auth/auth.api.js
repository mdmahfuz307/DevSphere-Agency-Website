// Placeholder API calls for auth
export async function loginApi(payload) {
  // replace with real API call
  return Promise.resolve({ ok: true, data: { id: 1, displayName: 'Demo User', email: payload.email } });
}

export async function registerApi(payload) {
  return Promise.resolve({ ok: true, data: { id: 2, displayName: payload.name } });
}
