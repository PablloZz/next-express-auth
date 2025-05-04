import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { config } from "@/libs/packages/config";
import { ExceptionMessage, TokenExpirationTime } from "@/libs/enums";
import { UnauthorizedError } from "@/libs/exceptions";

const secretKey = new TextEncoder().encode(config.env.jwt.JWT_TOKEN_SECRET);

async function createToken<T extends Record<string, unknown>>(
  payload: T,
  expirationTime: (typeof TokenExpirationTime)[keyof typeof TokenExpirationTime],
): Promise<string> {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expirationTime)
    .sign(secretKey);
}

async function verifyToken<T>(token: string): Promise<T & JWTPayload> {
  try {
    const { payload } = await jwtVerify<T>(token, secretKey);

    return payload;
  } catch {
    throw new UnauthorizedError(ExceptionMessage.INVALID_TOKEN);
  }
}

export { createToken, verifyToken };
