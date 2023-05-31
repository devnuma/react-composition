import { useContext } from "react";
import { AccordionContext } from "./Accordion";

export default function AccordionContent(props: AccordionContentProps) {
  const { children } = props;
  const { expanded } = useContext(AccordionContext);
  return <>{expanded && children}</>;
}

interface AccordionContentProps {
  children: any;
}
