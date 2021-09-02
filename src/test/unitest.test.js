describe("Testing of functions.js", () => {
  test("Function: it should choose the last digit of the car plate and it should be an integer", () => {
    const plateString = "ABC1234";
    function lastPlateDigit(plateString) {
      return parseInt(plateString[plateString.length - 1], 0);
    }
    const digit = lastPlateDigit(plateString);
    expect(digit).toBe(4);
  });

  test("Function: it should calcule seconds of a given time as a string", () => {
    let hour = "06:30:00";
    let s = hour.split(":");
    const inSeconds = parseInt(s[0]) * 3600 + parseInt(s[1]) * 60 + parseInt(s[2]);
    expect(inSeconds).toBe(23400);
  });
});
