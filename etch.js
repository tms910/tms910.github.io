const container=document.createElement('div');
const button=document.createElement('button');
let i='';
const colors=["#FF9AA2", "#FFB7B2", "#FFDAC1", "#E2F0CB", "#B5EAD7", "#C7CEEA","#F67280", "#C06C84", 
              "#6C5B7B", "#355C7D", "#F8B195", "#F67280","#C06C84", "#6C5B7B", "#F8B195", "#A8E6CF", "#DCEDC1", 
              "#FFD3B6","#FFAAA5", "#FF8B94", "#A8A7A7", "#CC527A", "#E8175D", "#474747","#363636", "#FFD700", 
              "#007FFF", "#654321", "#5F9EA0", "#A52A2A","#DEB887", "#7FFF00", "#D2691E", "#FF7F50", "#6495ED", 
              "#FFF8DC","#DC143C", "#00FFFF", "#00008B", "#008B8B", "#B8860B", "#A9A9A9","#006400", "#BDB76B", 
              "#8B008B", "#556B2F", "#FF8C00", "#9932CC","#8B0000", "#E9967A", "#8FBC8F", "#483D8B", "#2F4F4F", 
              "#00CED1"];

function rgb(){
    return Math.floor(Math.random() * 54);
  };


button.textContent='Click here create your own grid';
container.style.visibility='hidden';

container.textContent='';
container.style.width=`500px`;

for(let b=0; b<16**2; b++){
    container.style.visibility='visible';
    const div=document.createElement('div');
    div.setAttribute('class',`child${b}`);
    div.style.height=`${500/16}px`;
    div.style.width=`${500/16}px`;
    container.appendChild(div);

    div.addEventListener("mouseover",(event)=>{
        div.style.backgroundColor=`${colors[rgb()]}`;
    })    

    div.addEventListener("click",(event)=>{
        div.style.backgroundColor=`${colors[rgb()]}`;
    })  
}


button.addEventListener('click',(event)=>{
    i=prompt('Type squares per side:\n(No more than 100)');
    container.textContent='';
    for(a=i**2; a>0 && i<=100 ; a--){
        container.style.visibility='visible';
        const div=document.createElement('div');
        div.setAttribute('class',`child${a}`);
        div.style.height=`${500/i}px`;
        div.style.width=`${500/i}px`;
        container.appendChild(div);
        
        div.addEventListener("mouseover",(event)=>{
            div.style.backgroundColor=`${colors[rgb()]}`;
        })   
        
        div.addEventListener("click",(event)=>{
            div.style.backgroundColor=`${colors[rgb()]}`;
        })  
    }
})


container.setAttribute('class','container');

document.body.appendChild(container);
document.body.appendChild(button);













