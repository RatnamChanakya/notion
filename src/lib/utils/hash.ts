import crypto from 'crypto';

export function hashData(str: string): string {
  return crypto
    .createHash('sha256')
    .update(str)
    .digest('hex');
}