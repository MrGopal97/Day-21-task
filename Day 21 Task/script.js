
   
let div = document.createElement('div');
div.setAttribute('id','element')
div.setAttribute('class','container')
document.body.appendChild(div);
let i = 10;

//with using function name;
// function fn (){
//     setTimeout(() =>{
//         if(i>=1){
//             div.innerText = i
//         }
//         if(i==0){
//             div.innerText = 'Happy independence day!!'
//         }
//         i--;
//         fn();
//     },1000)

// }
// fn();
// creating an anonymous function
let fn =  (noname)=> {
    setTimeout(() =>{
        if(i>=1){
            div.innerText = i
        }
        if(i==0){
            div.innerText = 'Happy Indepenednce Day!!'
        }
        i--;
        // to run in loop
        fn(noname)
    },1000)
}
// creating another anonymous function to call the first
let fn2 = (noname)=> {
    fn2(noname);
}
fn(fn2);





