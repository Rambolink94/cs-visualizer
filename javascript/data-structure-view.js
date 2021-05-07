var nodeInfo = {
    count: 1,
    width: 120,
    height: 100
}

const newNodeButton = document.getElementById("new-node");
newNodeButton.addEventListener("click", () => {
    // hide / show node tool
    const newNodeTool = document.getElementById("new-node-tool");

    let newStyle = "";
    newNodeTool.style.display === "none" ? newStyle = "" : newStyle = "none";
    newNodeTool.style.display = newStyle;
});

const createNodeButton = document.getElementById("create-node");
createNodeButton.addEventListener("click", () => {
    let node = getNodeData();
    if(node) createNode(node);
});

function getNodeData() {
    const dataField = document.getElementById("node-data-field");
    const typeField = document.getElementById("node-type-field");

    if(dataField.value === "") {
        dataField.focus();
        return;
    } else if (typeField.value === "") {
        typeField.focus();
        return;
    }

    return {data: dataField.value, type: typeField.value};
}

function createNode(node) {
    //creates new nodes for visualization

    //create elements
    let baseNode = document.createElement("div");
    let h2 = document.createElement("h2");
    let strong = document.createElement("strong");
    let holder = document.createElement("div");

    //assign classes
    baseNode.className = "node";
    h2.className = "node-data";
    strong.className = "node-type";
    holder.className = "socket-holder";

    //fill data
    h2.textContent = node.data;
    strong.textContent = node.type;

    //structure elements
    strong.appendChild(holder);
    baseNode.appendChild(h2);
    baseNode.appendChild(strong);

    //position node
    baseNode.style.left = (nodeInfo.width * nodeInfo.count) + "px";
    baseNode.style.top = nodeInfo.height + "px";

    document.getElementById("v-view").appendChild(baseNode);

    console.log(`New node created: ${node.data} | ${node.type}.`);
    nodeInfo.count++;
}