export const discountRegExp: RegExp = /^[A-Z]+[0-9]+$/;

export function generateRandomString(): string {
  const uppercaseLetters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers: string = '0123456789';

  function getRandomChar(set: string): string {
    const randomIndex: number = Math.floor(Math.random() * set.length);
    return set.charAt(randomIndex);
  }

  let randomString: string = '';

  // 4 random string
  for (let i = 0; i < 4; i++) {
    randomString += getRandomChar(uppercaseLetters);
  }
  // 3 random number
  for (let i = 0; i < 3; i++) {
    randomString += getRandomChar(numbers);
  }

  return randomString;
}


