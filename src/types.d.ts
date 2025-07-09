export interface Appointments {
  id: string;
  name: string;
  description: string;
  section?: string;
  time?: string;
  date?: string;
}

declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[];
  }
}
