/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_URL?: string;
    NEXTAUTH_SECRET: string;
    DATABASE_URL: string;
  }
}
