export default function AdBox({ position }) {
  return (
    <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-4 md:p-6 rounded-xl text-center border border-emerald-200 mb-6 shadow-sm">
      <div className="flex items-center justify-center gap-2 mb-2">
        <div
          aria-hidden="true"
          className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center shadow"
        >
          <span className="text-white text-xs font-bold">Ad</span>
        </div>
        <p className="text-emerald-700 font-semibold text-sm">
          Publicidad - {position}
        </p>
      </div>
      <div className="bg-white bg-opacity-60 border border-emerald-100 rounded-lg p-3 text-emerald-600 text-sm">
        <p>Espacio reservado para Google Ads</p>
        <p className="text-xs mt-1 italic text-emerald-500">Pronostika.top</p>
      </div>
    </div>
  )
}
