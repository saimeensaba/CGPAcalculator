function dothis(){
document.querySelector('#btn_sub').addEventListener('click', myFn);
}
function cal(a, credit)
{
  if(a<40) {a = 0;}
  else if(a<45 && a>=40) {a=4;}
  else if(a<60 && a>=45) {a=6;}
  else if(a<70 && a>=60) {a=7;}
  else if(a<80 && a>=70) {a=8;}
  else if(a<90 && a>=80) {a=9;}
  else {a=10;}
  return a*credit;
}
function myFn(){
  var option=document.getElementById("option");
  let total;
switch(option.value){
  case "P":
    var first_subject_credit_res = cal( document.querySelector('#inputsidebar1').value,4);
    var second_subject_credit_res = cal(document.querySelector('#inputsidebar2').value,4);
    var third_subject_credit_res = cal(document.querySelector('#inputsidebar3').value,3);
    var fourth_subject_credit_res = cal(document.querySelector('#inputsidebar4').value,3);
    var fifth_subject_credit_res = cal(document.querySelector('#inputsidebar5').value,3);
    var sixth_subject_credit_res = cal(document.querySelector('#inputsidebar6').value,1);
    var seventh_subject_credit_res = cal(document.querySelector('#inputsidebar7').value,1);
    var eigth_subject_credit_res = cal(document.querySelector('#inputsidebar8').value,1);
    total = first_subject_credit_res+ second_subject_credit_res+ third_subject_credit_res+ fourth_subject_credit_res+ fifth_subject_credit_res+ sixth_subject_credit_res+ seventh_subject_credit_res+ eigth_subject_credit_res;
        break;
case "C":
  first_subject_credit_res = cal( document.querySelector('#inputsidebar9').value,4);
  second_subject_credit_res = cal(document.querySelector('#inputsidebar10').value,4);
  third_subject_credit_res = cal(document.querySelector('#inputsidebar11').value,3);
  fourth_subject_credit_res = cal(document.querySelector('#inputsidebar12').value,3);
  fifth_subject_credit_res = cal(document.querySelector('#inputsidebar13').value,3);
  sixth_subject_credit_res = cal(document.querySelector('#inputsidebar14').value,1);
  seventh_subject_credit_res = cal(document.querySelector('#inputsidebar15').value,1);
  eigth_subject_credit_res = cal(document.querySelector('#inputsidebar16').value,1);
  total = 
    first_subject_credit_res+
    second_subject_credit_res+
    third_subject_credit_res+
    fourth_subject_credit_res+
    fifth_subject_credit_res+
    sixth_subject_credit_res+
    seventh_subject_credit_res+
    eigth_subject_credit_res;
break;
default:
}
let total_sgpa=total/20;
    console.log("done total")
    let total_final_sgpa=total_sgpa.toPrecision(2);
    console.log(total_final_sgpa)
    console.log("done precision")
    document.querySelector('.sgpa_output h1').innerHTML = `SGPA = ${total_final_sgpa}`
}
function doReset(){
document.querySelector('#btn_re').addEventListener('click',() =>{
    document.querySelector('.sgpa_output h1').innerHTML=`SGPA =`
    document.querySelector('#inputsidebar1').value='';
    document.querySelector('#inputsidebar2').value='';
    document.querySelector('#inputsidebar3').value='';
    document.querySelector('#inputsidebar4').value='';
    document.querySelector('#inputsidebar5').value='';
    document.querySelector('#inputsidebar6').value='';
    document.querySelector('#inputsidebar7').value='';
    document.querySelector('#inputsidebar8').value='';
    document.querySelector('#inputsidebar9').value='';
    document.querySelector('#inputsidebar10').value='';
    document.querySelector('#inputsidebar11').value='';
    document.querySelector('#inputsidebar12').value='';
    document.querySelector('#inputsidebar13').value='';
    document.querySelector('#inputsidebar14').value='';
    document.querySelector('#inputsidebar15').value='';
    document.querySelector('#inputsidebar16').value='';   
})}
