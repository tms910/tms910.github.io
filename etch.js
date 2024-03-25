const container=document.createElement('div');
container.setAttribute('class','container');
document.body.appendChild(container);
const i=1;

for(let i=0; i<16; i++){
    const div=document.createElement('div');
    div.setAttribute('class','child');
    container.appendChild(div);
    
    div.addEventListener("mouseover",(event)=>{
        div.style.backgroundColor='#4284f5';
    })
}



