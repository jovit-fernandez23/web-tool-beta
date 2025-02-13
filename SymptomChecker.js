import React, { useState } from "react";

const symptomsList = [
  "Headache", "Lower Back Pain", "Chest Pain", "Abdominal Pain", "Joint Pain",
  "Hard to Breathe", "Coughing a Lot", "Chest Tightness", "Wheezing",
  "Fever & Chills", "Sore Throat", "Runny Nose", "Ear Pain", "Skin Rash",
  "Stomach Pain", "Nausea or Vomiting", "Diarrhea", "Constipation", "Bloating",
  "Feeling Dizzy", "Sudden Weakness", "Blurred Vision", "Numbness in Hands/Feet",
  "Feeling Anxious", "Feeling Depressed", "Trouble Sleeping", "Severe Fatigue",
  "Urination Problems", "Unexplained Weight Loss/Gain", "High/Low Blood Pressure",
  "Sudden Mood Changes", "Memory Problems"
];

export default function SymptomChecker() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const toggleSymptom = (symptom) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptom)
        ? prev.filter((s) => s !== symptom)
        : [...prev, symptom]
    );
  };

  const handleSubmit = () => {
    if (selectedSymptoms.length > 0) {
      setShowResults(true);
    }
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">AI Symptom Checker</h1>
      {!showResults ? (
        <>
          <p className="mb-2">Select your symptoms:</p>
          <div className="grid grid-cols-2 gap-2 w-full max-w-md">
            {symptomsList.map((symptom) => (
              <button
                key={symptom}
                className={`px-4 py-2 rounded ${
                  selectedSymptoms.includes(symptom)
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
                onClick={() => toggleSymptom(symptom)}
              >
                {symptom}
              </button>
            ))}
          </div>
          <button
            className="mt-4 px-6 py-2 bg-green-500 text-white rounded"
            onClick={handleSubmit}
            disabled={selectedSymptoms.length === 0}
          >
            Get Advice
          </button>
        </>
      ) : (
        <div className="w-full max-w-md p-4 mt-4 bg-white shadow rounded">
          <h2 className="text-xl font-semibold mb-2">AI Health Advice</h2>
          <p className="mb-2">Based on your symptoms: {selectedSymptoms.join(", ")}</p>
          <p>⚠️ This is not a diagnosis. Please consult a doctor for a professional opinion.</p>
          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
            onClick={() => setShowResults(false)}
          >
            Check Another Symptom
          </button>
        </div>
      )}
    </div>
  );
}
