import Modal from "./Modal"
import Button from "../../Button"
import { useState } from "react"

export default function AppTwo() {
  const [modal, setModal] = useState(false)

  return (
    <>
      <Button onClick={() => setModal(true)}>Открыть окно</Button>

      <Modal open={modal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          aliquid, corrupti veniam consequatur, nisi tenetur adipisci odio
          facilis explicabo optio quam labore quod, autem asperiores commodi
          quia at obcaecati non!
        </p>
        <Button onClick={() => setModal(false)}>Закрыть окно</Button>
      </Modal>
    </>
  )
}
