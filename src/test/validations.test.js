function validatePlate(plateNumber) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    if (plateNumber === "") {
      return "Por favor escriba un número de placa válido!";
    }
    for (let i = 0; i < 3; i++) {
      if (!letters.includes(plateNumber[i].toLowerCase())) {
        return "Por favor escriba caracteres alfabéticos en los primeros 3 caracteres de la placa de su automóvil!";
      }
    }
    for (let i = 3; i < plateNumber.length; i++) {
      if (!numbers.includes(plateNumber[i])) {
        return "Por favor escriba números desde la cuarta posición de la placa de su automóvil";
      }
    }
    return "Datos Correctos!";
  }

describe("Validations test", ()=> {
    test("Case 1: should be empty", () => {
        const plateNumber ="";
        expect(validatePlate(plateNumber)).toBe("Por favor escriba un número de placa válido!");
      });
      test("Case 2: should be alphabetics characters", () => {
        const plateNumber ="2BT123";
        expect(validatePlate(plateNumber)).toBe("Por favor escriba caracteres alfabéticos en los primeros 3 caracteres de la placa de su automóvil!");
      });
      test("Case 3: should be numbers", () => {
        const plateNumber ="WBT123E";
        expect(validatePlate(plateNumber)).toBe("Por favor escriba números desde la cuarta posición de la placa de su automóvil");
      });
      test("Case 4: should be correct", () => {
        const plateNumber ="RBT1234";
        expect(validatePlate(plateNumber)).toBe("Datos Correctos!");
      });
})