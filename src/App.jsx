import { Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import CameraScan from './components/CameraScan'
import Report from './components/Report'
import data from './data/mockAnalysis.json'
import { useState } from 'react'

function App() {
  const [reportData, setReportData] = useState(null)

  const handleScanComplete = () => {
    setTimeout(() => setReportData(data), 1500)
  }

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/scan" element={<CameraScan onComplete={handleScanComplete} />} />
      <Route path="/report" element={<Report data={reportData} />} />
    </Routes>
  )
}

export default App
