import { useState } from 'react';
import { authService } from './auth.service';

export function useAuthService() {
  const [user, setUser] = useState(authService.currentUser);
  const login = async (payload) => {
    const u = await authService.signIn(payload);
    setUser(u);
    return u;
  };
  const logout = async () => {
    await authService.signOut();
    setUser(null);
  };
  return { user, login, logout };
}
