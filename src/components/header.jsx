import { useContext } from "react";
import css from "../assets/header.module.css";
import { ContextPR } from "./context/context";

export default function Header() {
  const badgeClass = "badge bg-warning " + css.countCard;
  const { count } = useContext(ContextPR);

  return (
    <header className={css.header} style={{ backgroundColor: "#E3EAE8" }}>
      <p>رستوران من</p>
      <div>
        <i
          className="fa fa-shopping-bag text-success"
          style={{ fontSize: "30pt" }}
        ></i>
        <div className={badgeClass}>{count}</div>
      </div>
    </header>
  );
}
