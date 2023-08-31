import { createContext } from "react";

export const ContextPR = createContext({
  count: 0,
  prs: [],
  selectedPRs: [],
});
