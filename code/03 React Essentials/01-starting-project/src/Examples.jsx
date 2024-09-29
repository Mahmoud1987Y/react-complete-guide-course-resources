import { TEXT } from "./data";
import TabButton from "./TabButton";
import MenuText from "./MenuText";
import { useState } from "react";
export default function Examples() {
  const [menuText, setMenuText] = useState(TEXT["components"]);

  function selectHandler(selected) {
    setMenuText(TEXT[selected]);
  }
  return (
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
  );
}
