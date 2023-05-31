import { useContext } from "react";
import { AccordionContext } from "./Accordion";
import AccordionIcon from "./AccordionIcon";

export default function AccordionHeader(props: AccordionHeaderProps) {
  const { children } = props;
  const { toggleExpanded } = useContext(AccordionContext);
  return (
    <button onClick={toggleExpanded}>
      {children} <AccordionIcon opened="close icon" closed="open icon" />
    </button>
  );
}

interface AccordionHeaderProps {
  children: string | React.ReactElement;
}
