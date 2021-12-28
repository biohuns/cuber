declare class Cube {
  constructor(state?) {}
  move(alg: string): void;
  randomize(): void;
  solve(maxDepth?: number): string;
  static initSolver(): void;
  static random(): Cube;
  static scramble(): string;
}
declare module "cubejs" {
  export = Cube;
}
