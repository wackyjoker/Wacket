function returnObj(children, keys, ...arguments) {
    console.log(keys);
    return {
        all: {
            ...children,
            arguments
        },
        second: keys.map(child =>
            typeof child === "object"
                ? child
                : createTextElement(child)
        )
    }
}
function createTextElement(text) {
    const retVal={
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    }
    console.log("this is a child",retVal)
    return retVal;
}

const props = returnObj(["Foo", "Bar", "Foobar"], ["0x01", "0x02", "0x03"], 1, 2, 3, 4);

console.log(props);