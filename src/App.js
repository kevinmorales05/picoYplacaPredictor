import "./App.css";
import { Button, Input, DatePicker, TimePicker, Space } from "antd";
import moment from "moment";
import React, { useState } from "react";

function App() {
  const [plateNumber, setPlateNumber] = useState("");
  const [result, setResult] = useState(false);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const getResults = () => {
    console.log(plateNumber);
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
  };
  const onChangeTime = (value, timeString) => {
    console.log("valor ", value);
    console.log("hora escogida ", timeString);
    setTime(timeString);
  };

  return (
    <div className="main">
      <div className="block">
        <h1 className="title">Adiosmultas.com</h1>

        <p className="subtitle"><i>Evita multas y malos ratos con nuestra app</i></p>
        <p className="subtitle">
          Escribe la placa de tu auto, la fecha en la que deseas salir y la
          hora. Al presionar el botón <b>Analizar</b> la app te dice si puedes salir o no ese día.
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
