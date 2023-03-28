import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AddItem.module.scss";

const cx = classNames.bind(styles);

const data = "Drag item";

function AddItem(props: any) {

  const [item, setItem] = useState('');

  const handleAddItem = () => {
    props.onAddItem(data);
    setItem('');
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
