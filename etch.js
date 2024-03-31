const container=document.createElement('div');
const button=document.createElement('button');
let i='';

button.textContent='Click here create your own grid';
container.style.visibility='hidden';

container.textContent='';
container.style.width=`500px`;

for(let b=0; b<16**2; b++){
    container.style.visibility='visible';
    const div=document.createElement('div');
    div.setAttribute('class',`child${b}`);
    div.style.height=`${500/16-1.6}px`;
    div.style.width=`${500/16-1.6}px`;
    container.appendChild(div);
    div.addEventListener("mouseover",(event)=>{
        div.style.backgroundColor='#00BFFF';
    })        
}


button.addEventListener('click',(event)=>{
    i=prompt('Type squares per side:\n(No more than 100)');
    container.textContent='';
    for(a=i**2; a>0 && i<=100 ; a--){
        container.style.visibility='visible';
        const div=document.createElement('div');
        div.setAttribute('class',`child${a}`);
        div.style.height=`${500/i-1.6}px`;
        div.style.width=`${500/i-1.6}px`;
        container.appendChild(div);
        
        div.addEventListener("mouseover",(event)=>{
            div.style.backgroundColor='#00BFFF';
        })        
    }
})


container.setAttribute('class','container');

document.body.appendChild(container);
document.body.appendChild(button);










