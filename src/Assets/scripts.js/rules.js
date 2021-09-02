export default function rulesForLastDigitDay(day, digit) {
  if (day === 1 && (digit === 0 || digit === 1 || digit === 2 || digit === 3)) {
    return true;
  }
  if (day === 2 && (digit === 2 || digit === 3 || digit === 4 || digit === 5)) {
    return true;
  }
  if (day === 3 && (digit === 4 || digit === 5 || digit === 6 || digit === 7)) {
    return true;
  }
  if (day === 4 && (digit === 6 || digit === 7 || digit === 8 || digit === 9)) {
    return true;
  }
  if (day === 5 && (digit === 0 || digit === 1 || digit === 8 || digit === 9)) {
    return true;
  }
  if (day === 6) {
    return true;
  }
  if (day === 0) {
    return true;
  } else {
    return false;
  }
}


