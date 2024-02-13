import React, { useState } from "react"
import Button from "../Button"

const calcButton = [
  { value: "1" },
  { value: "2" },
  { value: "3" },
  { value: "4" },
  { value: "5" },
  { value: "6" },
  { value: "7" },
  { value: "8" },
  { value: "9" },
  { value: "0" },
  { value: "=" },
  { value: "+" },
  { value: "-" },
  { value: "*" },
  { value: "/" },
]

const AppFour = () => {
  const [displayValue, setDisplayValue] = useState("0")
  const [previousValue, setPreviousValue] = useState(null)
  const [operation, setOperation] = useState(null)

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  }

  const handleButtonClick = (value) => {
    if (value === "=") {
      // Выполнение операции
      if (operations[operation]) {
        setDisplayValue((prev) =>
          String(
            operations[operation](parseFloat(previousValue), parseFloat(prev))
          )
        )
      }
      setPreviousValue(null)
      setOperation(null)
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Установка операции
      setPreviousValue(displayValue)
      setOperation(value)
      setDisplayValue("0")
    } else {
      // Ввод числа
      setDisplayValue((prev) => (prev === "0" ? value : prev + value))
    }
  }

  const clearInput = () => {
    setDisplayValue("0")
    setPreviousValue(null)
    setOperation(null)
  }

  return (
    <div>
      <div>
        {calcButton.map((item) => (
          <Button key={item} onClick={() => handleButtonClick(item.value)}>
            {item.value}
          </Button>
        ))}
      </div>
      <div style={{marginTop: '2rem'}} className="calcInput">
        <input type="text" readOnly value={displayValue} />
        <Button onClick={clearInput}>C</Button>
      </div>
    </div>
  )
}

export default AppFour
