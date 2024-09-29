import { useState } from "react";
import Header from "./Header/Header";

import ReactCard from "./ReactCard/ReactCard";
import TabButton from "./TabButton";

import CoreConcepts from "./CoreConcepts";
import Examples from "./Examples";

function App() {
  return (
    <div>
      <Header />
      <CoreConcepts />
      <Examples />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
