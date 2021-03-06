const element = {
    type: "h1",
    props: {
        title: "foo",
        children: "Hello",
    }
}

const container = document.getElementById("root");
const node = document.createElement(element.type);
      node["title"]=element.props.title;
const text = document.createTextNode("something");

text["NodeValue"] = element.props.children;

node.appendChild(text);
container.appendChild(node);