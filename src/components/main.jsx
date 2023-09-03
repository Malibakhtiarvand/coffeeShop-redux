import { memo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToSelectedList } from "./redux/slice";
import { NumericFormat } from "react-number-format";

const ShowPr = memo(({ index }) => {
  const ref = useRef(null);
  const dispatch = useDispatch();

  return (
    <div
      className="mt-5 col-xl-3 col-md-4 col-sm-6 col-12 pt-2"
      onClick={() => {
        ref.current.style.backgroundColor = "#B0FF67";
        dispatch(addToSelectedList(index));
      }}
    >
      <div className="card" id={"pr_" + index} ref={ref}>
        <img
          src={index.productUrl}
          className="card-img"
          style={{ height: 100, width: 100, margin: "auto" }}
          alt={index.productName}
        />
        <div className="card-body mt-1 text-center">
          <p>{index.productName}</p>
          <div>
            <del className="text-danger">
              <NumericFormat
                value={(index.price * (100 - index.Discount)) / 100}
                thousandSeparator=","
                displayType="text"
              />
              تومان
            </del>{" "}
            <br />
            <p>
              <NumericFormat
                value={(index.price * (100 - index.Discount)) / 100}
                thousandSeparator=","
                displayType="text"
              />
              تومان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default function Main() {
  const prsReducer = useSelector((state) => state.prsReducer);

  return (
    <div className="row container m-auto">
      {prsReducer.map((index) => (
        <ShowPr key={index.id} index={index} />
      ))}
    </div>
  );
}
