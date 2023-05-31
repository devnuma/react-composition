import { useCallback, useMemo, useState } from "react";

export default function useToggle() {
  const [status, setStatus] = useState(false);
  const toggleStatus = useCallback(() => {
    setStatus((prev) => !prev);
  }, []);

  const values = useMemo(() => {
    return {
      status,
      toggleStatus,
    };
  }, [status, toggleStatus]);

  return values;
}
