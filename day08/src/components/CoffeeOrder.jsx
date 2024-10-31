import React from "react";
import { useDispatch, useSelector } from "react-redux";

const CoffeeOrder = () => {

  const menu = useState([])
  
    const name = useSelector()
    const qty = useSelector()

  return (
    <div>
      <h3>주문서</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>아메리카노</label>
          <input type="text" name="americano" value={0} onChange={qtyChage} />
        </div>
        <div>
          <label>카페라떼</label>
          <input type="text" name="latte" value={0} onChange={qtyChage} />
        </div>
        <div>
          <label>카푸치노</label>
          <input type="text" name="cappuccino" value={0} onChange={qtyChage} />
        </div>
        <div>
          <button type="submit">주문</button>
          <button type="button" onClick={handleReset}>
            초기화
          </button>
        </div>
      </form>
    </div>
  );
};

export default CoffeeOrder;
