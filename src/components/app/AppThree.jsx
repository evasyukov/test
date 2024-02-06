import { useState } from "react"

const questons = [
  {
    title: "React - это?",
    variants: ["библиотека", "фреймворк", "приложение"],
    correct: 0,
  },
  {
    title: "Компонент - это?",
    variants: ["приложение", "часть страницы", "не знаю"],
    correct: 1,
  },
  {
    title: ".jsx - это?",
    variants: [
      "функция",
      "библиотека для HTML",
      "Это тот же HTML, но с возможностью выполнять JS-код",
    ],
    correct: 2,
  },
]

function Result({correct}) {
  return (
    <div className="result">
      <h2>Правильных ответов:  {correct}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  )
}

function Progress({ queston, onClickVariant }) {
  return (
    <>
      <div className="progress">
        <div style={{ width: "50%" }} className="progress__inner"></div>
      </div>
      <h1>{queston.title}</h1>
      <ul>
        {queston.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default function AppThree() {
  const [correct, setCorrect] = useState(0) // правильные вопросы
  const [step, setStep] = useState(0) // шаг вопроса
  const queston = questons[step]

  const onClickVariant = (index) => {
    setStep(step + 1) // переход к следующему вопросу
    if (index === queston.correct) {
      // если индекс с правильным ответом
      setCorrect(correct + 1) // прибавляем 1
    }
  }

  return (
    <div className="App">
      {step != questons.length ? (
        <Progress queston={queston} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  )
}
