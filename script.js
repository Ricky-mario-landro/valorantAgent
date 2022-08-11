const thumbs=document.querySelector(".thumbAgent").children;

const changeAgents = (Agents) => {
    document.querySelector(".mainAgent").src=Agents.children[0].src

    for(let i=0; i<thumbs.length;i++){
        thumbs[i].classList.remove("active");
      }
    Agents.classList.add("active");
}
