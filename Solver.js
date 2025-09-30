import React, { useState } from "react";
import { evaluate, simplify, derivative } from "mathjs";

function Solver() {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState("");

  const handleSolve = () => {
    try {
      const simplified = simplify(equation).toString();
      const evaluated = evaluate(equation);
      const deriv = derivative(equation, "x").toString();

      setResult(`📌 المعادلة: ${equation}\n✅ التبسيط: ${simplified}\n🧮 الناتج: ${evaluated}\n🔎 المشتقة: ${deriv}`);
    } catch (err) {
      setResult("⚠️ خطأ: تأكد من صياغة المعادلة بشكل صحيح.");
    }
  };

  return (
    <section id="solver" className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">حل المعادلات</h2>
      <input
        type="text"
        placeholder="أدخل معادلة (مثال: 2x + 3 = 7)"
        value={equation}
        onChange={(e) => setEquation(e.target.value)}
        className="border rounded p-2 w-full mb-4"
      />
      <button
        onClick={handleSolve}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        حل
      </button>
      {result && (
        <pre className="mt-4 bg-gray-100 p-4 rounded whitespace-pre-wrap">
          {result}
        </pre>
      )}
    </section>
  );
}

export default Solver;