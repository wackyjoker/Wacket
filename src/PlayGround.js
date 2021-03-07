function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children:children.map(child =>
                typeof child === "object"
                    ? child
                    : createTextElement(child)
            )
        }
    }
}
function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}
const Wacket = {
    createElement
}
const Element = Wacket.createElement("h1", ["0x01", "0x02", "0x03"], "Modafaka","and foo");

console.log(Element.props.children);