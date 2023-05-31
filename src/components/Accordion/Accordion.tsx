import { createContext } from "react";
import useToggle from "../../hooks/useToggle";
import AccordionContent from "./AccordionContent";
import AccordionHeader from "./AccordionHeader";

export const AccordionContext = createContext<IAccordionContext>({});
const { Provider } = AccordionContext;

export function Accordion(props: AccordionProps) {
  const { header, children } = props;
  const { status: expanded, toggleStatus: toggleExpanded } = useToggle();
  const value = {
    expanded,
    toggleExpanded,
  };

  return (
    <Provider value={value}>
      <>
        <AccordionHeader>{header}</AccordionHeader>
        <AccordionContent>{children}</AccordionContent>
      </>
    </Provider>
  );
}

interface AccordionProps {
  header: string;
  children: React.ReactElement;
}

interface IAccordionContext {
  expanded?: boolean;
  toggleExpanded?: () => void;
}
