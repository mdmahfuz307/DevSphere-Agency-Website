// lightweight wrapper using context-based auth
export async function signIn(payload){
  return Promise.resolve({ id:1, displayName:'Demo User', email: payload.email });
}
export async function signOut(){ return Promise.resolve(); }
