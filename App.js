import React from "react";
import Navbar from "./components/Navbar";
import Solver from "./components/Solver";
import QuickAI from "./components/QuickAI";
import Graph from "./components/Graph";
import Team from "./components/Team";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6 space-y-10">
        <Solver />
        <QuickAI />
        <Graph />
        <Team />
      </div>
    </div>
  );
}

export default App;