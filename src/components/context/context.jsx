import { createContext } from "react";

export const ContextPR = createContext({
  showCardDialog: false,
  changeShow: () => {},
});
