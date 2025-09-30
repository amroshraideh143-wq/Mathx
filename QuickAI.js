import React, { useState } from "react";
import Tesseract from "tesseract.js";
import { evaluate } from "mathjs";

function QuickAI() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    Tesseract.recognize(file, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      setText(text.trim());
      try {
        const evaluated = evaluate(text);
        setResult(`📌 المعادلة: ${text}\n✅ الحل: ${evaluated}`);
      } catch {
        setResult("⚠️ لم أستطع حل هذه المعادلة.");
      }
    });
  };

  return (
    <section id="quickai" className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">الحل السريع بالتصوير (AI)</h2>
      <input type="file" onChange={handleUpload} />
      {image && <img src={image} alt="uploaded" className="mt-4 max-h-40" />}
      {result && (
        <pre className="mt-4 bg-gray-100 p-4 rounded whitespace-pre-wrap">
          {result}
        </pre>
      )}
    </section>
  );
}

export default QuickAI;