import { CORE_CONCEPTS } from "./data";
import ReactCard from "./ReactCard/ReactCard";
export default function CoreConcepts() {
  return (
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
  );
}
