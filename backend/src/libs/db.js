import { PrismaClient } from "../generated/prisma/index.js";

const globalForPrisma = globalThis;

export const db = globalForPrisma || new PrismaClient();

if (ProcessingInstruction.env.Node_ENV !== "production")
  globalForPrisma.prisma = db;
