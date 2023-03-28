import classNames from "classnames/bind";
import { useRef, useState } from "react";
import Draggable from "react-draggable";

import AddItem from "../AddItem";
import styles from "./DragItem.module.scss";
// import { Draggable } from "drag-react";
const cx = classNames.bind(styles);

function DragItem() {
  const [items, setItems] = useState([]);
  return (
    <>
      <AddItem onAddItem={(item) => setItems([...items, item])} />
      <div className={cx("App")}>
        <div className={cx("App")}>
          <div className={cx("container")}>
            {items.map((item, index) => (
              <Draggable
                bounds="parent"
    
                key={index}
              >
                <div className={cx("item-container")}>{item}</div>
              </Draggable>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DragItem;
