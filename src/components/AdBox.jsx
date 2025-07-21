export default function AdBox({ position }) {
  return (
    <div className="bg-yellow-100 p-4 rounded-md text-center text-yellow-900 border border-yellow-300 mb-6">
      <p>Anuncio {position}</p>
      {/* Aquí iría el script / iframe real de Google Ads */}
    </div>
  )
}
