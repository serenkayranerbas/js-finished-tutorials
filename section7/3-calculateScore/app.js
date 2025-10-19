const correctAnswers=['E','E','E','E'];
const form=document.querySelector('.question-form');
const result=document.querySelector('.result');

form.addEventListener('submit',e=>{
    e.preventDefault();
    let score=0;

    const userAnswers=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]
    userAnswers.forEach((answer,index)=>{
        if(answer===correctAnswers[index]){
            score=score+25;
        }
    })
    result.classList.remove('d-none');
    result.querySelector('span').textContent=`${score1}%`;

//     let score1=0;
//    const show= setInterval(()=>{
//     result.querySelector('span').textContent=`${score1}%`;
//     if(score1==score){
//         clearInterval(show);
//     }else{
//         score1++;
//     }
//         },10); 
        
})

// setTimeout(()=>{
//     console.log('Can');
// },2000);

// setInterval(()=>{
//     console.log('Can');
// },3000);

// let i =0;
// const show= setInterval(()=>{
//     console.log('Can');
//     i++;
//     if(i==4){
//         clearInterval(show);
//     }
// },3000);
