const xButtons = document.getElementsByClassName("floating-tool-x-button");
Array.from(xButtons).forEach(element => {
    element.addEventListener("click", () => {
        const current = element.parentElement;
        hideTool(current);
    });
});

function hideTool(tool) {
    let display = "";
    tool.style.display === "none" ? display = "" : display = "none";
    tool.style.display = display;
}
