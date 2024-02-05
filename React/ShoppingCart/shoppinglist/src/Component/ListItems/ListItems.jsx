import List from "../List/List";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { showError } from "../utils/showToast";
import { useContext } from "react";
import {
  ShoppingDispatchContext,
  ShoppingListContext,
} from "../providers/context";

const ListItems = () => {
  const dispatch = useContext(ShoppingDispatchContext);

  const shoppingItems = useContext(ShoppingListContext);
  return (
    <>
      <div className="outer-list">
        {shoppingItems &&
          shoppingItems.map((item) => {
            return (
              <div className="icon-list" key={item.id}>
                <FontAwesomeIcon
                  onClick={() =>
                    dispatch({
                      type: "increaseQuantity",
                      itemId: item.id,
                    })
                  }
                  className="icon icon-plus"
                  icon={faPlus}
                />
                <List
                  name={item.name}
                  quantity={item.quantity}
                  price={item.price}
                />
                <FontAwesomeIcon
                  onClick={() => {
                    if (item.quantity == 1) {
                      showError(`${item.name} is removed from the list`);
                    }
                    dispatch({
                      type: "decreaseQuantity",
                      itemId: item.id,
                    });
                  }}
                  className="icon icon-minus"
                  icon={faMinus}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListItems;
