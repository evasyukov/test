import { useState } from "react"
import Button from "../Button"

let calcButton = [
    { val: "1" },
    { val: "2" },
    { val: "3" },
    { val: "4" },
    { val: "5" },
    { val: "6" },
    { val: "7" },
    { val: "8" },
    { val: "9" },
    { val: "0" },
    { val: "=" },
    { val: "+" },
    { val: "-" },
    { val: "*" },
    { val: "/" }
]

export default function AppFour() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>калькулятор</h3>
      <input
        style={{ marginBottom: "1rem" }}
        defaultValue={count}
        type="text"
        id="calc"
      />
      <div>
        {calcButton.map((item) => (
          <Button key={item}>{item.val}</Button>
        ))}
      </div>
    </>
  )
}
