import { useState } from 'react'

export default function Form({ onSubmit, loading }) {
  // Estados locales para cada campo
  const [personalInfo, setPersonalInfo] = useState({
    nationality: 'MX',
    age: '',
    degreeLevel: '',
    englishProficiency: '',
    financialProof: '',
    academicRecord: '',
    tiesHomeCountry: '',
  })

  const [employment, setEmployment] = useState({
    jobTitle: '',
    hasJobOffer: false,
    occupationType: '',
    salary: '',
  })

  const handlePersonalChange = (e) => {
    const { name, value } = e.target
    setPersonalInfo(prev => ({ ...prev, [name]: value }))
  }

  const handleEmploymentChange = (e) => {
    const { name, value, type, checked } = e.target
    setEmployment(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación básica (ejemplo)
    if (!personalInfo.nationality) {
      alert('Debes ingresar nacionalidad')
      return
    }
    if (!personalInfo.age) {
      alert('Debes ingresar edad')
      return
    }

    // Enviar los datos a App.jsx
    onSubmit({ personalInfo, employment })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block font-semibold mb-1" htmlFor="nationality">Nacionalidad</label>
        <input
          id="nationality"
          name="nationality"
          type="text"
          value={personalInfo.nationality}
          onChange={handlePersonalChange}
          className="w-full border border-gray-300 rounded p-2"
          disabled
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="age">Edad</label>
        <input
          id="age"
          name="age"
          type="number"
          value={personalInfo.age}
          onChange={handlePersonalChange}
          className="w-full border border-gray-300 rounded p-2"
          required
          min={0}
          max={120}
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="degreeLevel">Nivel de estudio</label>
        <select
          id="degreeLevel"
          name="degreeLevel"
          value={personalInfo.degreeLevel}
          onChange={handlePersonalChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        >
          <option value="">Selecciona</option>
          <option value="highschool">Preparatoria</option>
          <option value="bachelor">Licenciatura</option>
          <option value="master">Maestría</option>
          <option value="doctorate">Doctorado</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="englishProficiency">Inglés (%)</label>
        <input
          id="englishProficiency"
          name="englishProficiency"
          type="number"
          value={personalInfo.englishProficiency}
          onChange={handlePersonalChange}
          className="w-full border border-gray-300 rounded p-2"
          min={0}
          max={100}
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="financialProof">Prueba financiera (%)</label>
        <input
          id="financialProof"
          name="financialProof"
          type="number"
          value={personalInfo.financialProof}
          onChange={handlePersonalChange}
          className="w-full border border-gray-300 rounded p-2"
          min={0}
          max={100}
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="academicRecord">Historial académico (%)</label>
        <input
          id="academicRecord"
          name="academicRecord"
          type="number"
          value={personalInfo.academicRecord}
          onChange={handlePersonalChange}
          className="w-full border border-gray-300 rounded p-2"
          min={0}
          max={100}
          required
        />
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="tiesHomeCountry">Lazos con país de origen (%)</label>
        <input
          id="tiesHomeCountry"
          name="tiesHomeCountry"
          type="number"
          value={personalInfo.tiesHomeCountry}
          onChange={handlePersonalChange}
          className="w-full border border-gray-300 rounded p-2"
          min={0}
          max={100}
          required
        />
      </div>

      <hr className="my-4" />

      <div>
        <label className="block font-semibold mb-1" htmlFor="jobTitle">Puesto de trabajo</label>
        <input
          id="jobTitle"
          name="jobTitle"
          type="text"
          value={employment.jobTitle}
          onChange={handleEmploymentChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          id="hasJobOffer"
          name="hasJobOffer"
          type="checkbox"
          checked={employment.hasJobOffer}
          onChange={handleEmploymentChange}
          className="w-4 h-4"
        />
        <label htmlFor="hasJobOffer" className="font-semibold">¿Tienes oferta laboral?</label>
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="occupationType">Tipo de ocupación</label>
        <select
          id="occupationType"
          name="occupationType"
          value={employment.occupationType}
          onChange={handleEmploymentChange}
          className="w-full border border-gray-300 rounded p-2"
          required
        >
          <option value="">Selecciona</option>
          <option value="specialty">Especialidad</option>
          <option value="general">General</option>
          <option value="technical">Técnico</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold mb-1" htmlFor="salary">Salario</label>
        <input
          id="salary"
          name="salary"
          type="number"
          value={employment.salary}
          onChange={handleEmploymentChange}
          className="w-full border border-gray-300 rounded p-2"
          min={0}
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white font-bold px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Consultando...' : 'Consultar elegibilidad'}
      </button>
    </form>
  )
}
