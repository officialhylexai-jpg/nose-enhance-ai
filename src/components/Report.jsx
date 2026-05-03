export default function Report({ data }) {
  if (!data) return <div>Loading...</div>

  return (
    <div className="p-6">
      <h1>Report</h1>
      <p>Symmetry: {data.scores.symmetry}</p>
    </div>
  )
}
