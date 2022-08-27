import { useEffect } from "react";

export function usePageTitle(title: string) {
  const BASE_TITLE = "Alganews";

  useEffect(() => {
    document.title = `${BASE_TITLE} - ${title}`;
  }, [title]);
}
