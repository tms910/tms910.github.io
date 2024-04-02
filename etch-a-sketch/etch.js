const container=document.createElement('div'), button=document.createElement('button');
let i=''; size=500;


function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

button.textContent='Click here to create your own grid';

container.style.visibility='hidden';
container.textContent='';
container.style.width=`${size}px`;

for(let b=0; b<16**2; b++){
    container.style.visibility='visible';
    const div=document.createElement('div');
    div.setAttribute('class',`child${b}`);
    div.style.height=`${size/16}px`;
    div.style.width=`${size/16}px`;
    container.appendChild(div);

    div.addEventListener("mouseover",(event)=>{
        div.style.backgroundColor=getRandomColor();
    })    

    div.addEventListener("click",(event)=>{
        div.style.backgroundColor=getRandomColor();
    })  
}


button.addEventListener('click',(event)=>{
    i=prompt('Enter squares per side:\n(No more than 100)');
    container.textContent='';
    for(let a=i**2; a>0 && i<=100 ; a--){
        container.style.visibility='visible';
        const div=document.createElement('div');
        div.setAttribute('class',`child${a}`);
        div.style.height=`${size/i}px`;
        div.style.width=`${size/i}px`;
        container.appendChild(div);
        
        div.addEventListener("mouseover",(event)=>{
            div.style.backgroundColor=getRandomColor();
        })   
        
        div.addEventListener("click",(event)=>{
            div.style.backgroundColor=getRandomColor();
        })  
    }
})


container.setAttribute('class','container');

document.body.appendChild(container);
document.body.appendChild(button);













