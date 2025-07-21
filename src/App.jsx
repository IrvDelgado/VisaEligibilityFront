import { useState } from "react";
import Form from "./components/Form";
import ResultSection from "./components/ResultSection";
import AdBox from "./components/AdBox";
import { checkEligibility } from "./lib/api";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await checkEligibility(formData);
      setResult(res);
    } catch (err) {
      console.error(err);
      setError("Error al consultar la API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-indigo-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-10 space-y-10">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 drop-shadow-md mb-8">
          Visa Eligibility Checker
        </h1>

        <Form onSubmit={handleSubmit} loading={loading} />

        <AdBox />

        {error && (
          <p className="text-center text-red-600 font-semibold text-lg animate-pulse">
            {error}
          </p>
        )}

        {result?.success && <ResultSection result={result.data} />}
      </div>
    </main>
  );
}
