import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Analytics } from "@vercel/analytics/react"
import Home from './componnets/Home'
import EmailComposer from './componnets/Email'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Analytics/>
<div className="min-h-screen w-full bg-white relative">
  {/* Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    }}
  />
     {/* Your Content/Components */}
     <Home/>
     {/* <EmailComposer/> */}
</div>

</>
  )
}


export default App
