export interface JwtPayload {
  sub: number; // ID do usuário
  email: string; // Email do usuário
  iat?: number; // Data de emissão (opcional)
  exp?: number; // Data de expiração (opcional)
}
