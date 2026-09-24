let root = document.getElementById("root");

// let heading1 = document.createElement("h1");
// heading1.innerText = "Welcome React";
// heading1.style.backgroundColor = "orange";
// heading1.style.fontSize = "20px";

// let para1 = document.createElement("p");
// para1.innerText = "React is a Library";
// para1.style.backgroundColor = "yellow";
// para1.style.fontSize = "25px";

let React = {
  createElement: function (tag, styles, children) {
    let ele = document.createElement(tag);
    ele.innerText = children;
    for (let key in styles) {
      ele.style[key] = styles[key];
    }
    return ele;
  },
};

let heading1 = React.createElement(
  "h1",
  { backgroundColor: "orange", fontSize: "20px" },
  "Welcome React",
);

let para1 = React.createElement(
  "p",
  { backgroundColor: "yellow", fontSize: "25px" },
  "React is a Library",
);

let ReactDOM = {
  render: function (root, ele) {
    root.append(ele);
  },
};

ReactDOM.render(root, heading1);
ReactDOM.render(root, para1);

// root.append(heading1);
// root.append(para1);
