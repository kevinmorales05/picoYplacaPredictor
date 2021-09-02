import moment from "moment";
import getSeconds from "./inSecondsFunc";
function validatePlate(plateNumber) {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  if (plateNumber === "") {
    return "Por favor escriba un número de placa válido!";
  }
  for (let i = 0; i < 3; i++) {
    if (!letters.includes(plateNumber[i])) {
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
export default function validateInformation(
  plateNumber,
  dateString,
  hourString
) {
  if (plateNumber === "" || dateString === "" || hourString === "") {
    return "Le falta llenar uno o más campos!";
  }
  const timeNow = getSeconds(moment().format("hh:mm:ss"));
  const dateNow = moment().format("YYYY-MM-DD");
  const dateFuture = dateString;
  console.log("fecha futuro", dateFuture);
  console.log("fecha ahora", dateNow);
  console.log("timenow", timeNow);
  const timeInFuture = hourString;
  console.log("timefuture", timeInFuture);
  if (dateFuture < dateNow) {
    return "Escoja una fecha en el futuro!";
  }
  if (dateFuture === dateNow) {
    if (timeInFuture < timeNow) {
      return "Escoja una hora en el futuro!";
    } else {
      return validatePlate(plateNumber);
    }
  } else {
    return validatePlate(plateNumber);
  }
}
