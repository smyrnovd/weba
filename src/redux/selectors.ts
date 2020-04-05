export const isAuthenticated = (state: any): boolean => !!state.token;
export const getToken = (state: any): string => state.token;
