import { useState } from "react"
import Button from "./Button"
import AppOne from "./app/AppOne"
import TabsSection from "./TabsSection"
import HomeSection from "./HomeSection"

function App() {
  const [tab, setTab] = useState("home")

  return (
    <>
      <div className="menu">
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === "home" && <HomeSection />}
        {tab === 'appOne' && <AppOne/>}

      </div>
    </>
  )
}

export default App
