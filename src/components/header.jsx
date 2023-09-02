import { useContext } from "react";
import { useSelector } from "react-redux";
import css from "../assets/header.module.css";
import { ContextPR } from "./context/context";

export default function Header() {
  const badgeClass = "badge bg-warning " + css.countCard;
  const { changeShow } = useContext(ContextPR);
  const { count } = useSelector((state) => state.selectPrReducer);

  return (
    <header className={css.header} style={{ backgroundColor: "#E3EAE8" }}>
      <p>رستوران من</p>
      <div onClick={changeShow}>
        <i
          className="fa fa-shopping-bag text-success"
          style={{ fontSize: "30pt" }}
        ></i>
        <div className={badgeClass}>{count}</div>
      </div>
    </header>
  );
}
