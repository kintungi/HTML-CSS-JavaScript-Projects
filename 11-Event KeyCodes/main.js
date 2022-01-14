const insert = document.getElementById("insert");
// console.log(insert)

window.addEventListener("keydown", (e) => {
    // console.log(e)
    insert.innerHTML = `<div class="key">
    ${e.key === " " ? "Space" : e.key} 
    <small>e.key</small>
</div>
<div class="key">
    ${e.keyCode}
    <small>e.keyCode</small>
</div>
<div class="key">
    ${e.code}
    <small>e.code</small>
</div>`;
})