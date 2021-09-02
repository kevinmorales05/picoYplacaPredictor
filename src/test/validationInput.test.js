import moment from "moment";
import validatePlate from '../Assets/scripts/validations'
function getSeconds(hour) {
    let s = hour.split(":");
    const inSeconds =
      parseInt(s[0]) * 3600 + parseInt(s[1]) * 60 + parseInt(s[2]);
    return inSeconds;
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
    //console.log("fecha futuro", dateFuture);
    //console.log("fecha ahora", dateNow);
    //console.log("timenow", timeNow);
    const timeInFuture = hourString;
   // console.log("timefuture", timeInFuture);
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