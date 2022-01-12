const panels = document.getElementsByClassName("panel");
const container = document.getElementById("container");
console.log(panels);
// panels[1].classList.add("active")
// panels[3].className = "panel active";

function deactivateActivePanel() {
    for(let panel of panels) {
        panel.classList.remove("active");
        let panelTitle = panel.firstChild;
        panelTitle.classList.remove("active");
        panelTitle.classList.remove("show");
        /*looping on all panels and deactivate any 
        active panel before activating the one that
        was clicked*/
    }

}

/*function makePanelActive() {
    let target = e.target
    target.classList.add("active")
};*/

function expandPanel(e) {//passing the event object
    
    let target = e.target;//caching the event target
    
    e.stopPropagation();//Preventing the event from firing further
    
    e.preventDefault();//preventing default behaviour if any

   
   
    if ((target.className !== "active") && (target.id !== "container") && (target.className === "panel")) {
    
        let elTitle = target.firstChild;//caching the dom reference to the panel title
    
        deactivateActivePanel();
    
    
        target.classList.add("active");
    
        setTimeout(() => elTitle.classList.add("show"),300);//displays the quote
    
        setTimeout(() => elTitle.classList.add("active"),400)//This makes the title hidden until the panel is fully expanded
    // console.log(e.type);
   } else if ((target.className !== "active") && (target.id !== "container") && (target.className === "title")) {
       
       let elpanel = target.parentNode;
    //    console.log(`it works`);
       
    deactivateActivePanel();
       
    setTimeout(() => target.classList.add("show"),300);
       
    setTimeout(() => target.classList.add("active"),400)
        
    elpanel.classList.add("active");
      /*The first if block managed to create a toggle
      to expand panels but it happened that if you 
      clicked on a hidden panel title, the event
      would not fire. So I added this if else block
      to pass the event listener to the title.
      
      At first the event could fire even if the container
      was clicked hance I had to use strict conditions
      to fix the issue.
      */

   }
}


console.log(container);
container.addEventListener("click", expandPanel, false);