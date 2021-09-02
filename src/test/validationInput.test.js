import validateInformation from "../Assets/scripts/validations";
describe("Validation of the information that the user inputs", () => {
  test("Case 1 : it should be a correct plate number", () => {
    const plateNumber = "";
    const dateString = "";
    const hourString = 0;
    expect(validateInformation(plateNumber, dateString, hourString)).toBe(
      "Le falta llenar uno o más campos!"
    );
  });
  test("Case 2 : plate number should have at least 6 characters", () => {
    const plateNumber = "AW";
    const dateString = "2021-10-2";
    const hourString = 12345;
    expect(validateInformation(plateNumber, dateString, hourString)).toBe(
      "El nombre de la placa está incompleto, al menos necesita 6 caracteres!"
    );
  });
  test("Case 3 : the date should be a future date", () => {
    const plateNumber = "AWR123";
    const dateString = "2020-10-02";
    const hourString = 12345;
    expect(validateInformation(plateNumber, dateString, hourString)).toBe(
      "Escoja una fecha en el futuro!"
    );
  });
  test("Case 4 : the hour should be a future hour", () => {
    const plateNumber = "AWR123";
    const dateString = "2021-09-02";
    const hourString = 30;
    expect(validateInformation(plateNumber, dateString, hourString)).toBe(
        "Escoja una hora en el futuro!"
    );
  });
  test("Case 5 : plate number should have 3 alphatet characters in the beggining", () => {
    const plateNumber = "AW2123";
    const dateString = "2021-11-2";
    const hourString = 12345;
    expect(validateInformation(plateNumber, dateString, hourString)).toBe(
        "Por favor escriba caracteres alfabéticos en los primeros 3 caracteres de la placa de su automóvil!"
    );
  });
  test("Case 6 : plate number should have 3 numerical characters from 4th character of the plate number", () => {
    const plateNumber = "AWT12h";
    const dateString = "2021-11-2";
    const hourString = 12345;
    expect(validateInformation(plateNumber, dateString, hourString)).toBe(
        "Por favor escriba números desde la cuarta posición de la placa de su automóvil"
    );
  });
  test("Case 7 : all the data is correct!", () => {
    const plateNumber = "AWT125";
    const dateString = "2021-11-2";
    const hourString = 12345;
    expect(validateInformation(plateNumber, dateString, hourString)).toBe(
        "Datos Correctos!"
    );
  });
});


