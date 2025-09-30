import React, { useEffect, useRef } from "react";

function Graph() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.Desmos) {
      const calculator = window.Desmos.GraphingCalculator(ref.current, {
        expressions: true,
        keypad: true,
      });
      calculator.setExpression({ id: "graph1", latex: "y=x^2" });
    }
  }, []);

  return (
    <section id="graph" className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">التمثيل البياني</h2>
      <div ref={ref} style={{ width: "100%", height: "400px" }}></div>
      <script src="https://www.desmos.com/api/v1.6/calculator.js?apiKey=YOUR_API_KEY"></script>
    </section>
  );
}

export default Graph;