import { SignJWT } from "jose";
import { config } from "@/libs/packages/config";
import { TokenExpirationTime } from "@/libs/enums";

const secretKey = new TextEncoder().encode(config.env.JWT_TOKEN_SECRET);

function createToken<T extends Record<string, unknown>>(
  payload: T,
  expirationTime: (typeof TokenExpirationTime)[keyof typeof TokenExpirationTime],
) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expirationTime)
    .sign(secretKey);
}

export { createToken };
