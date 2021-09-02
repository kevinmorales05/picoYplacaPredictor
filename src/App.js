import "./App.css";
import { Button, Input, DatePicker, TimePicker, Space, Modal } from "antd";
import React, { useState } from "react";
import lastPlateDigit from "./Assets/scripts.js/functions";
import rulesForLastDigitDay from "./Assets/scripts.js/rules";
import rulesForLastDigitTime from "./Assets/scripts.js/rulesTime";
import getSeconds from "./Assets/scripts.js/inSecondsFunc";
import ResultsModal from "./components/ResultsModal";
function App() {
  const [plateNumber, setPlateNumber] = useState("");
  const [time, setTime] = useState(0);
  const [date, setDate] = useState("");
  const [day, setDay] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [result, setResult] = useState("Resultado de facto!");

  //function to evaluate all of the results
  const getResults = () => {
    showModal();
    const lastNumber = lastPlateDigit(plateNumber);
    console.log(
      "¿Su auto puede salir en hora pico?",
      rulesForLastDigitDay(day, lastNumber)
    );
    console.log("¿Puede circular a esta hora?", rulesForLastDigitTime(time));
    if (
      rulesForLastDigitDay(day, lastNumber) === true &&
      rulesForLastDigitTime(time) === true
    ) {
      setResult("Es libre de circular!");
      return;
    }
    if (
      rulesForLastDigitDay(day, lastNumber) === true &&
      rulesForLastDigitTime(time) === false
    ) {
      setResult("Es libre de circular pero te espera mucho tráfico!");

      return;
    } 
    if (
      rulesForLastDigitDay(day, lastNumber) === false &&
      rulesForLastDigitTime(time) === true
    ) {
      setResult("Hoy tiene pico y placa pero la hora en la que desea salir es permitido circular!");

      return;
    }
    else {
      setResult("No puede circular este dia!");
      return;
    }
  };
  const onChangeDate = (value, dateString) => {
    setDate(dateString);
    if (value) {
      setDay(value._d.getDay());
    }
  };
  const onChangeTime = (value, timeString) => {
    const timeInSeconds = getSeconds(timeString);
    setTime(timeInSeconds);
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
        <Modal
          title="Resultado de la consulta"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <ResultsModal message={result} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
