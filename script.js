let input=document.getElementsByTagName('input')
input=Array.from(input).filter((element)=>{
    return element.type=='radio';
   });
input.forEach(element => {
    let clicks=0;
    element.addEventListener('click',function(){
              clicks++;
              if(clicks%2==0){
                element.checked=false;
              }
    })
});

// getting data from input and making div out of it
let form=document.querySelector('#todo-work');
let x=document.getElementById('tasks');
form.addEventListener('keyup',function(e){
    if(e.key=='Enter'&&form.value!==''){
        let label=document.createElement('label');
        let input=document.createElement('input');
        input.type='radio'
        let check=document.createElement('span');
        label.classList.add('container');
        check.classList.add('checkmark');
        label.innerText=`${form.value}`;
        label.appendChild(input);
        label.appendChild(check);
        console.log(label);
        x.appendChild(label);
        form.value='';
        
    }
})
// complete all task and clear completed
let clr=document.getElementById('clear')
let comp=document.getElementById('complete');
clr.addEventListener('click',function(e){
    e.stopPropagation();
    console.log('abcd')
    let getele=Array.from(document.getElementsByClassName('container'));
    getele.forEach((ele)=>{
        if(Array.from(ele.children)[0].checked)
          x.removeChild(ele);
    })
})
comp.addEventListener('click',function(e){
    console.log('abcd')
    let getele=Array.from(document.getElementsByClassName('container'));
    getele.forEach((ele)=>{
        Array.from(ele.children)[0].checked=true;
    })
})

// All,completed,uncompleted

let all=document.getElementById('all-selected');
let comptrue=document.getElementById('comptrue');
let uncompleted=document.getElementById('notcomp')
all.addEventListener('click',function(e){
    let getele=document.getElementsByClassName('container');
    getele=[...getele];
    getele.forEach((ele)=>{
            ele.style.display="block"
    })
})
comptrue.addEventListener('click',function(e){
    let getele=document.getElementsByClassName('container');
    getele=[...getele];
    getele.forEach((ele)=>{
        if(!Array.from(ele.children)[0].checked){
           ele.style.display="none"
        }else{
            ele.style.display="block";
        }
    })
})
uncompleted.addEventListener('click',function(e){
    let getele=document.getElementsByClassName('container');
    getele=[...getele];
    getele.forEach((ele)=>{
        if(Array.from(ele.children)[0].checked){
           ele.style.display="none"
        }else{
            ele.style.display="block";
        }
    })
})

