const container=document.createElement('div');
const button=document.createElement('button');

button.textContent='Square Creator';
button.addEventListener('click',(event)=>{
    let i=prompt('Type how many squares do you want to create:\n(No more than 99 squares)');
    for(i; i>0 && i<100; i--){
        const div=document.createElement('div');
        div.setAttribute('class',`child${i}`);
        container.appendChild(div);
        
        div.addEventListener("mouseover",(event)=>{
            div.style.backgroundColor='#4284f5';
        })        
    }
})


container.setAttribute('class','container');
document.body.appendChild(button);
document.body.appendChild(container);








