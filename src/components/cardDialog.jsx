import { useContext, useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { ContextPR } from "./context/context";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToSelectedList, decrement, deletePr } from "./redux/slice";

export default function CardDialog() {
  const { showCardDialog, changeShow } = useContext(ContextPR);
  const { prs } = useSelector((state) => state.selectPrReducer);
  const dispatch = useDispatch();

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
            <th>نام</th>
            <th>تعداد</th>
          </tr>
        </thead>
        <tbody>
          {prs.map((index) => (
            <tr style={{borderTop: "1px black solid"}} className="mt-5" key={index.id}>
              <td>
                <img
                  style={{ height: 40, width: 40 }}
                  src={index.productUrl}
                  alt={index.productName}
                />
              </td>
              <td>{index.productName}</td>
              <td
                className="d-flex justify-content-center align-items-center"
                style={{ columnGap: 10 }}
              >
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    dispatch(addToSelectedList(index));
                  }}
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
                  >
                    حذف
                  </button>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    if (index.count > 0) dispatch(decrement(index));
                  }}
                >
                  -
                </button>
              </td>
            </tr>
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
