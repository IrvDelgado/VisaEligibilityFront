import { useState } from "react"

const defaultData = {
  personalInfo: {
    nationality: "MX",
    age: 28,
    degreeLevel: "bachelor",
    englishProficiency: 85,
    financialProof: 80,
    academicRecord: 75,
    tiesHomeCountry: 60,
  },
  employment: {
    jobTitle: "engineer",
    hasJobOffer: true,
    occupationType: "specialty",
    salary: 50000,
  },
}

export default function Form({ onSubmit, loading }) {
  const [formData, setFormData] = useState(defaultData)

  const handleChange = (section, key, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }))
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <section className="space-y-3">
        <h2 className="font-semibold text-lg text-gray-700">Información Personal</h2>
        {Object.entries(formData.personalInfo).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm font-medium capitalize">{key}</label>
            <input
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
              type={typeof value === "number" ? "number" : "text"}
              value={value}
              onChange={(e) => handleChange("personalInfo", key, typeof value === "number" ? +e.target.value : e.target.value)}
            />
          </div>
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="font-semibold text-lg text-gray-700">Empleo</h2>
        {Object.entries(formData.employment).map(([key, value]) => (
          <div key={key}>
            <label className="block text-sm font-medium capitalize">{key}</label>
            {typeof value === "boolean" ? (
              <input
                type="checkbox"
                className="mt-2"
                checked={value}
                onChange={(e) => handleChange("employment", key, e.target.checked)}
              />
            ) : (
              <input
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
                type={typeof value === "number" ? "number" : "text"}
                value={value}
                onChange={(e) => handleChange("employment", key, typeof value === "number" ? +e.target.value : e.target.value)}
              />
            )}
          </div>
        ))}
      </section>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded transition"
          disabled={loading}
        >
          {loading ? "Consultando..." : "Consultar elegibilidad"}
        </button>
      </div>
    </form>
  )
}