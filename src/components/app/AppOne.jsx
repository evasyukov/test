import { useState } from "react"

export default function AppOne() {
  const [count, setCount] = useState(0)

  return (
    <div className="app counter">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={() => setCount(count - 1)}>Минус</button>
        <button onClick={() => setCount(count + 1)}>Плюс</button>
      </div>
    </div>
  )
}
