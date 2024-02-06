import Button from "./Button"

export default function TabsSection({ active, onChange }) {
  return (
    <section style={{ marginBottom: "1rem" }}>
      <Button isActive={active === "home"} onClick={() => onChange("home")}>
        Home
      </Button>
      <Button
        isActive={active === "appOne"}
        onClick={() => onChange("appOne")}
      >
        Счетчик
      </Button>
      <Button
        isActive={active === "appTwo"}
        onClick={() => onChange("appTwo")}
      >
        Модальное окно
      </Button>
    </section>
  )
}
