import classNames from "classnames/bind";
import { useState } from "react";

import AddItem from "../AddItem";
import styles from "./DragItem.module.scss";
import { Draggable } from "drag-react";
const cx = classNames.bind(styles);

function DragItem() {
  const [items, setItems] = useState([]);

  return (
    <>
     <AddItem onAddItem={(item) => setItems([...items, item])} /><div className={cx("App")}>
    <div className={cx("App")}>
      <div className={cx("container")}>
        {items.map((item, index) => (
          <Draggable key={item}         axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          grid={[25, 25]}
          scale={1} >
            <div  className={cx("item-container")}>{item}</div>
          </Draggable>
        ))}
      </div>
    </div>
  </div></>
  );
}

export default DragItem;
