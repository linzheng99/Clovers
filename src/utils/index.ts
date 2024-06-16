type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined;
type ClassDictionary = Record<string, unknown>;
type ClassArray = ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  if (!inputs) return ''
  return inputs.join(' ')
}
