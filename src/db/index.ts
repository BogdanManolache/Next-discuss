import { PrismaClient } from '@prisma/client';

declare global {
  var prismaClient: PrismaClient;
}

/**
 * Creates or retrieves a singleton instance of the PrismaClient.
 * @return {PrismaClient} The PrismaClient instance.
 */
function createPrismaClient(): PrismaClient {
  if (!globalThis.prismaClient) globalThis.prismaClient = new PrismaClient();
  return globalThis.prismaClient;
}

export const db = createPrismaClient();
