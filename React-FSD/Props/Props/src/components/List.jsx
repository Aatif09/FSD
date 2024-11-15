import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function List() {
  let list = ["One", "two", "Three", "Four", "Five"];
  const showList = true;
  return (
    <div>
      <ul class="list-group">
        {list.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;

//Conditional Rendering
{
  /* <ul className="list-group">
  {showList
    ? list.map((item) => (
        <li className="list-group-item" key={item}>
          {item}
        </li>
      ))
    : "No items available"}
</ul>;

<ul className="list-group">
  {showList &&
    list.map((item) => (
      <li className="list-group-item" key={item}>
        {item}
      </li>
    ))}
</ul>;


let content;
  if (showList) {
    content = (
      <ul className="list-group">
        {list.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  } else {
    content = <p>No items to display.</p>;
  }

  return <div>{content}</div>;
} */
}

//  <ul class="list-group">
//    <li class="list-group-item">One</li>
//    <li class="list-group-item">Two</li>
//    <li class="list-group-item">Three</li>
//    <li class="list-group-item">Four</li>
//    <li class="list-group-item">Five</li>
//  </ul>;
