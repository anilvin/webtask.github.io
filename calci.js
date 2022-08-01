let s=''
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            s=eval(s)
            document.querySelector('input').value=s
        }
        else if(e.target.innerHTML=='%'){
        s='';
        document.querySelector('input').value=s;
        }
        else{
        console.log(e.target.innerHTML)
        s=s +e.target.innerHTML;
        document.querySelector('input').value=s  
    }
    console.log(s)
    })
})
