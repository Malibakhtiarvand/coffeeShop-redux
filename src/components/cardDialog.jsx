import { memo, useContext } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { ContextPR } from "./context/context";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToSelectedList, decrement, deletePr } from "./redux/slice";
import { NumericFormat } from "react-number-format";

export default function CardDialog() {
  const { showCardDialog, changeShow } = useContext(ContextPR);
  const { prs } = useSelector((state) => state.selectPrReducer);

  return createPortal(
    <Dialog isOpen={showCardDialog} onDismiss={changeShow}>
      <table
        border="1"
        style={{
          borderCollapse: "collapse",
          textAlign: "center",
          margin: "auto",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>عکس</th>
            <th id="namesInTbl">نام</th>
            <th>تعداد</th>
            <th>قیمت</th>
          </tr>
        </thead>
        <tbody>
          {prs.map((index) => (
            <MakeTD key={index.id} index={index} />
          ))}
        </tbody>
      </table>

      <button
        className="close-button btn btn-success mt-3"
        onClick={changeShow}
      >
        <img
          src="https://icons.iconarchive.com/icons/iconshock/real-vista-business/48/shopping-cart-icon.png"
          width="48"
          height="48"
        />
      </button>
    </Dialog>,
    document.getElementById("CardDialog")
  );
}

var MakeTD = ({ index }) => {
  console.log("MakeTD");
  const dispatch = useDispatch();

  return (
    <tr style={{ borderTop: "1px black solid" }} className="mt-5">
      <td>
        <img
          style={{ height: 40, width: 40 }}
          src={index.productUrl}
          alt={index.productName}
        />
      </td>
      <td className="prsForTblName">{index.productName}</td>
      <td
        className="d-flex justify-content-center align-items-center"
        style={{ columnGap: 10 }}
      >
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch(addToSelectedList(index));
          }}
          style={{height: 30,width: 30,display: "flex",alignItems: "center",justifyContent: "center"}}
        >
          +
        </button>
        <div>
          <p>{index.count}</p>
          <button
            onClick={() => {
              dispatch(deletePr(index));
            }}
            className="btn btn-warning"
            style={{height: 35,width: 35,display: "flex",alignItems: "center",justifyContent: "center"}}
          >
            حذف
          </button>
        </div>
        <button
          className="btn btn-danger"
          onClick={() => {
            if (index.count > 0) dispatch(decrement(index));
          }}
          style={{height: 30,width: 30,display: "flex",alignItems: "center",justifyContent: "center"}}
        >
          -
        </button>
      </td>
      <td>
        <NumericFormat
          value={((index.price * (100 - index.Discount)) / 100) * index.count}
          thousandSeparator=","
          displayType="text"
        />
      </td>
    </tr>
  );
};
MakeTD = memo(MakeTD);
