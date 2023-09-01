import { useContext, useState } from "react";
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import { ContextPR } from "./context/context";
import { createPortal } from "react-dom";

export default function CardDialog() {
  const { showCardDialog, changeShow, selectedPRs } = useContext(ContextPR);

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
          {selectedPRs.map((index) => (
            <tr key={index.id}>
              <td>
                <img
                  style={{ height: 40, width: 40 }}
                  src={index.productUrl}
                  alt={index.productName}
                />
              </td>
              <td>{index.productName}</td>
              <td>{index.count}</td>
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
