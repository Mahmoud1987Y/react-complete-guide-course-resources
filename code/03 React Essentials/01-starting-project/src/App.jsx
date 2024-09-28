import { useState } from "react";
import Header from "./Header/Header";
import MenuText from "./MenuText";
import ReactCard from "./ReactCard/ReactCard";
import TabButton from "./TabButton";
import { CORE_CONCEPTS, TEXT } from "./data";

function App() {
  const [menuText, setMenuText] = useState(TEXT['components']);

  function selectHandler(selected) {
    console.log(TEXT[selected]);
    setMenuText(TEXT[selected]);
  }
  return (
    <div>
      <Header />
      <section id="core-concepts">
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
            <ReactCard {...CORE_CONCEPTS[3]} />
          </li>
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton onSelect={() => selectHandler("components")}>
            Component
          </TabButton>
          <TabButton onSelect={() => selectHandler("jsx")}>JSX</TabButton>
          <TabButton onSelect={() => selectHandler("state")}>States</TabButton>
          <TabButton onSelect={() => selectHandler("props")}>Props</TabButton>
        </menu>
        <div id="tab-content">
          <MenuText text={menuText} />
        </div>
      </section>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
