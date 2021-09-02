import getSeconds from "./inSecondsFunc";
const fromMorning = getSeconds("7:00:00");
const toMorning = getSeconds("9:30:00");
const fromAfternoon = getSeconds("16:00:00");
const toAfternoon = getSeconds("19:30:00");

export default function rulesForLastDigitTime(hour) {
  if (hour > fromMorning && hour < toMorning) {
    return false;
  }
  if (hour > fromAfternoon && hour < toAfternoon) {
    return false;
  } else {
    return true;
  }
}
