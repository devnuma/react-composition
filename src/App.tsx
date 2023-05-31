import { Accordion } from "./components/Accordion/Accordion";
import Editable from "./components/Editable/Editable";

function App() {
  return (
    <>
      <Accordion header="Accordion 1">
        <div>Content for Accordion 1</div>
      </Accordion>
      <Accordion header="Accordion 2">
        <div>Content for Accordion 2</div>
      </Accordion>
      <br />
      <Editable />
    </>
  );
}

export default App;
