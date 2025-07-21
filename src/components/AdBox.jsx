export default function AdBox({ position }) {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg text-center border border-emerald-200 mb-6 shadow-sm">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div className="w-6 h-6 bg-emerald-500 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">Ad</span>
        </div>
        <p className="text-emerald-700 font-medium">Publicidad - {position}</p>
      </div>
      <div className="text-emerald-600 text-sm bg-white bg-opacity-50 rounded p-3 border border-emerald-100">
        <p>Espacio reservado para Google Ads</p>
        <p className="text-xs mt-1">Monetización optimizada para visas</p>
      </div>
    </div>
  )
}
