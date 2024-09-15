import React, { useState } from "react";
import "./styles.css";

function Input(props) {
  const [value, setValue] = useState('')

  return (
    <>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="°C를 입력하세요"
      />
      {props.render(value)}
    </>
  )
}

export default function App() {
  return (
    <div className="App">
      <h1>☃️ 온도변환기 🌞</h1>
      <Input
        render={value => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  )
}

function Kelvin({ value = 0 }) {
  return <div className="temp">{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div className="temp">{(value * 9) / 5 + 32}°F</div>;
}
