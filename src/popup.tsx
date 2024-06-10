import React from "react"
import { createRoot } from "react-dom/client"

function Popup() {

  const onExtract = async () => {
    const tabs = await browser.tabs.query({ active: true, currentWindow: true })
    const active = tabs[0]
    browser.tabs.sendMessage(active.id!, { command: 'extract' })
  }

  return (
    <div className="container">
      <button className="extract" onClick={onExtract}>Extract</button>
    </div>
  )
}


const root = createRoot(document.getElementById("root")!)

browser.tabs
  .executeScript({ file: "js/content.js" })
  .then(() => {
    root.render(
      <React.StrictMode>
        <Popup />
      </React.StrictMode>
    )
  })
  .catch(console.error)