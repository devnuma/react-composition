import { useContext } from "react";
import { AccordionContext } from "./Accordion";

export default function AccordionIcon(props: AccordionIconProps) {
  const { expanded } = useContext(AccordionContext);
  const { opened, closed } = props;
  return <span>{expanded ? opened || "-" : closed || "+"}</span>;
}

interface AccordionIconProps {
  opened: string | React.ReactElement;
  closed: string | React.ReactElement;
}
