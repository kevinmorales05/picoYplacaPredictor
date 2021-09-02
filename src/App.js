import "./App.css";
import { Button, Input, DatePicker, TimePicker, Space } from "antd";
import React, { useState } from "react";
import lastPlateDigit from "./Assets/scripts.js/functions";
import rulesForLastDigitDay from "./Assets/scripts.js/rules";

function App() {
  const [plateNumber, setPlateNumber] = useState("");
  const [result, setResult] = useState(false);
  const [time, setTime] = useState(0);
  const [date, setDate] = useState("");
  const [day, setDay] = useState(0);

  //function to evaluate hour
  function getSeconds(hour) {
    let s = hour.split(":");
    //console.log('desde getseconds',s[0])
    const inSeconds =
      parseInt(s[0]) * 3600 + parseInt(s[1]) * 60 + parseInt(s[2]);
    //console.log('en segundos ', inSeconds)
    return inSeconds;
  }
  const fromMorning = getSeconds("7:00:00");
  const toMorning = getSeconds("9:30:00");
  const fromAfternoon = getSeconds("16:00:00");
  const toAfternoon = getSeconds("19:30:00");

  function rulesForLastDigitTime(hour) {
    console.log("hora en segundos", hour);
    if (hour > fromMorning && hour < toMorning) {
      return false;
    }
    if (hour > fromAfternoon && hour < toAfternoon) {
      return false;
    } else {
      return true;
    }
  }

  //function to evaluate all of the results
  const getResults = () => {
    console.log(plateNumber);
    console.log(lastPlateDigit(plateNumber));
    const lastNumber = lastPlateDigit(plateNumber);
    console.log(
      "tiene restriccion vehicular?",
      rulesForLastDigitDay(day, lastNumber)
    );
    console.log(
      "tiene restriccion vehicular por la hora?",
      rulesForLastDigitTime(time)
    );
    if(rulesForLastDigitDay(day, lastNumber) === true && rulesForLastDigitTime(time) === true){

      alert("Es libre de circular!")
    }
    else {
      alert("No puede circular este dia!")
    }

    if (!result) {
      setResult(true);
    } else {
      setResult(false);
    }
    console.log("hora a consultar: ", time);
  };
  const onChangeDate = (value, dateString) => {
    console.log("valor ", value);
    console.log("fecha escogida ", dateString);
    setDate(dateString);
    if (value) {
      console.log("dia de la semana", value._d.getDay());
      setDay(value._d.getDay()); //variable a enviar
    }
  };
  const onChangeTime = (value, timeString) => {
    if (value) {
      console.log("valor ", value._d);
    }

    console.log("hora escogida ", timeString);
    const timeInSeconds=getSeconds(timeString);
    setTime(timeInSeconds);
    console.log("segundos desde change time", getSeconds(timeString));
  };

  return (
    <div className="main">
      <div className="block">
        <h1 className="title">Adiosmultas.com</h1>

        <p className="subtitle">
          <i>Evita multas y malos ratos con nuestra app</i>
        </p>
        <p className="subtitle">
          Escribe la placa de tu auto, la fecha en la que deseas salir y la
          hora. Al presionar el botón <b>Analizar</b> la app te dice si puedes
          salir o no ese día.
        </p>
        <Input
          maxLength="7"
          className="input"
          placeholder="Escribe tu placa"
          onChange={(e) => setPlateNumber(e.target.value)}
        />
        <Space direction="vertical">
          <DatePicker
            placeholder="Escoge la fecha"
            dateRender={(current) => {
              const style = {};
              if (current.date() === 1) {
                style.border = "1px solid #1890ff";
                style.borderRadius = "50%";
              }
              return (
                <div className="ant-picker-cell-inner" style={style}>
                  {current.date()}
                </div>
              );
            }}
            onChange={onChangeDate}
            className="input"
          />
          <TimePicker
            placeholder="Escoge la hora"
            //defaultValue={moment("12:08", "HH:mm")}
            size="large"
            onChange={onChangeTime}
            className="input"
          />
        </Space>
        <Button className="btn" type="primary" onClick={getResults}>
          Analizar
        </Button>
        {result ? (
          <div>
            <p className="subtitle"></p>El resultado es positivo
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default App;
