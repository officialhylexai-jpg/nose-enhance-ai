import { useNavigate } from 'react-router-dom'

export default function CameraScan({ onComplete }) {
  const navigate = useNavigate()

  return (
    <div className="text-center mt-20">
      <h2>Camera Scan (Demo)</h2>
      <button
        onClick={() => {
          onComplete()
          navigate('/report')
        }}
        className="bg-green-600 px-6 py-3 mt-6 rounded"
      >
        Simulate Scan
      </button>
    </div>
  )
}
