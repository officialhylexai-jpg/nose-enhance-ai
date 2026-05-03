import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-4xl mb-6">NoseEnhance AI</h1>
      <Link to="/scan" className="bg-blue-600 px-6 py-3 rounded">
        Start Scan
      </Link>
    </div>
  )
}
