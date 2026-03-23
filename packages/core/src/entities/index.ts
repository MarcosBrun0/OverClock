// packages/core/src/index.ts

export const calculateOverclockLimit = (baseClock: number): number => {
  // Lógica fictícia do seu core
  const limit = baseClock * 1.25;
  console.log(`[Core] Calculando limite para base ${baseClock}MHz -> ${limit}MHz`);
  return limit;
};
