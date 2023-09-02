import { memo, useContext } from "react";
import { useSelector } from "react-redux";
import css from "../assets/header.module.css";
import { ContextPR } from "./context/context";

var Count = () => {
  console.log("count");
  const badgeClass = "badge bg-warning " + css.countCard;
  const { count } = useSelector((state) => state.selectPrReducer);
  return <div className={badgeClass}>{count}</div>;
};

Count = memo(Count)

export default function Header() {
  const { changeShow } = useContext(ContextPR);

  return (
    <header className={css.header} style={{ backgroundColor: "#E3EAE8" }}>
      <p>رستوران من</p>
      <div onClick={changeShow}>
        <i
          className="fa fa-shopping-bag text-success"
          style={{ fontSize: "30pt" }}
        ></i>
        <Count />
      </div>
    </header>
  );
}
