import Header from "./Header/Header";
import ReactCard from "./ReactCard/ReactCard";
import { CORE_CONCEPTS } from "./data";

function App() {
  return (
    <div>
      <Header />
      <div id="core-concepts">
        <ul>
          <li>
            <ReactCard {...CORE_CONCEPTS[0]} />
          </li>
          <li>
            <ReactCard {...CORE_CONCEPTS[1]} />
          </li>
          <li>
            <ReactCard {...CORE_CONCEPTS[2]} />
          </li>
          <li>
            {" "}
            <ReactCard {...CORE_CONCEPTS[3]} />
          </li>
        </ul>
      </div>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
