const panels = document.getElementsByClassName("panel");
const container = document.getElementById("container");
console.log(panels);
// panels[1].classList.add("active")
// panels[3].className = "panel active";

function deactivateActivePanel() {
    for(let panel of panels) {
        panel.classList.remove("active");
        let panelTitle = panel.firstChild;
        panelTitle.classList.remove("active")
    }

}

/*function makePanelActive() {
    let target = e.target
    target.classList.add("active")
};*/

function expandPanel(e) {
    let target = e.target;
    e.stopPropagation();//Preventing the event from firing further
    e.preventDefault();//preventing default behaviour if any

   if ((target.className !== "active") && (target.id !== "container") && (target.className === "panel")) {
    let elTitle = target.firstChild;//caching the dom reference to the panel title
    deactivateActivePanel();
    
    target.classList.add("active");
    setTimeout(() => elTitle.classList.add("active"),400)//This makes the title hidden until the panel is fully expanded
    // console.log(e.type);
   } 
}


console.log(container);
container.addEventListener("click", expandPanel, false);