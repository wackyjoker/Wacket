function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map(child =>
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
    }
}

function render(element, container) {
    const dom = element.type === "TEXT_ELEMENT"
        ? document.createTextNode("")
        : document.createElement(element.type)
    element.props.children.forEach(child =>
        render(child, dom)
    )
    const isProperty = key => key !== "children"
    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name => {
            dom[name] = element.props[name]
        })
    container.appendChild(container);
}

// main functions above

const Wacket = {
    createElement,
    render
}

const element = Wacket.createElement(
    "div",
    {id: "foo"},
    Wacket.createElement("a", null, "bar"),
    Wacket.createElement("b")
)
/** @jsx Wacket.createElement */
// const element = (
//     <div id="foo">
//         <a>bar</a>
//         <b/>
//     </div>
// )
const container = document.getElementById("root")
Wacket.render(element, container)