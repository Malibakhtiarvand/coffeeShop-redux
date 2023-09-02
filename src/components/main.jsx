import { memo, useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContextPR } from "./context/context";
import { addToSelectedList } from "./redux/slice";

function ShowPr({ index }) {
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
            <del className="text-danger">{index.price} تومان</del>
            <p className="text-primary">
              {(index.price * (100 - index.Discount)) / 100} تومان
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

ShowPr = memo(ShowPr);

export default function Main() {
  const { setSelectedPrs } = useContext(ContextPR);
  const prsReducer = useSelector((state) => state.prsReducer);

  return (
    <div className="row container m-auto">
      {prsReducer.map((index) => (
        <ShowPr setSelectedPrs={setSelectedPrs} key={index.id} index={index} />
      ))}
    </div>
  );
}
