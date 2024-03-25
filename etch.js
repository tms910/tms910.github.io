const container=document.createElement('div');
            container.setAttribute('name','container');
            document.body.appendChild(container);
            for(let i=0; i<16; i++){
                const div=document.createElement('div');
                div.textContent='div';
                container.appendChild(div);
            }