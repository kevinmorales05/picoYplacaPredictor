function getSeconds(hour) {
  let s = hour.split(":");
  const inSeconds =
    parseInt(s[0]) * 3600 + parseInt(s[1]) * 60 + parseInt(s[2]);
  return inSeconds;
}
const fromMorning = getSeconds("7:00:00");
const toMorning = getSeconds("9:30:00");
const fromAfternoon = getSeconds("16:00:00");
const toAfternoon = getSeconds("19:30:00");
function rulesForLastDigitTime(hour) {
  if (hour > fromMorning && hour < toMorning) {
    return false;
  }
  if (hour > fromAfternoon && hour < toAfternoon) {
    return false;
  } else {
    return true;
  }
}
describe("Testing hour rules of Pico y Placa", () => {
  //The pick hour
  //from 7 am to 9:30 am
  //from 4 pm to 7:30 am
  test("Case 1: should be false if the hour is within the morning interval of time", () => {
    const time = "8:45:00";
    const hour = getSeconds(time);
    expect(rulesForLastDigitTime(hour)).toBe(false);
  });
  test("Case 2: should be true if the hour is out of the morning interval of time", () => {
    const time = "10:45:00";
    const hour = getSeconds(time);
    expect(rulesForLastDigitTime(hour)).toBe(true);
  });
  test("Case 3: should be false if the hour is within the afternoon interval of time", () => {
    const time = "17:45:00";
    const hour = getSeconds(time);
    expect(rulesForLastDigitTime(hour)).toBe(false);
  });
  test("Case 4: should be true if the hour is out of the afternoon interval of time", () => {
    const time = "23:45:00";
    const hour = getSeconds(time);
    expect(rulesForLastDigitTime(hour)).toBe(true);
  });
});
