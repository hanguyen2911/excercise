import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AddItem.module.scss";

const cx = classNames.bind(styles);

const data = "Drag item";

function AddItem(props: any) {
  const clearItemData = {
    itemName: "",
  };

  const [item, setItem] = useState(clearItemData);

  const handleAddItem = () => {
    props.onAddItem(data);
    setItem(clearItemData);
  };
  return (
    <div>
      <button className={cx("button")} onClick={handleAddItem}>
        Button Add Item
      </button>
    </div>
  );
}

export default AddItem;
