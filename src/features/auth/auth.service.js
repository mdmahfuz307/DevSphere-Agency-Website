// Simple auth service (in-memory for scaffold)
export const authService = {
  currentUser: null,
  signIn(data) {
    this.currentUser = data;
    return Promise.resolve(this.currentUser);
  },
  signOut() {
    this.currentUser = null;
    return Promise.resolve();
  },
};
