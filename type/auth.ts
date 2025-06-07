interface JwtPayload {
  id: string;
  role: 'admin' | 'user';
  email?: string;
}
