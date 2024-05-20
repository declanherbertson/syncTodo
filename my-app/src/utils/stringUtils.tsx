export const anyToString = (value: any): string => JSON.stringify(value);
export const stringToAny = (value: string): any => JSON.parse(value);
export const basicCmp = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b)