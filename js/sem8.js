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
      case "C":
        var first_subject_credit_res = cal( document.querySelector('#inputsidebar1').value,3);
        var second_subject_credit_res = cal(document.querySelector('#inputsidebar2').value,3);
        var third_subject_credit_res = cal(document.querySelector('#inputsidebar3').value,8);
        var fourth_subject_credit_res = cal(document.querySelector('#inputsidebar4').value,1);
        var fifth_subject_credit_res = cal(document.querySelector('#inputsidebar5').value,3);
        total = first_subject_credit_res+ second_subject_credit_res+ third_subject_credit_res+ fourth_subject_credit_res+ fifth_subject_credit_res;
            break;
    case "E":
      first_subject_credit_res = cal( document.querySelector('#inputsidebar6').value,3);
      second_subject_credit_res = cal(document.querySelector('#inputsidebar7').value,3);
      third_subject_credit_res = cal(document.querySelector('#inputsidebar8').value,8);
      fourth_subject_credit_res = cal(document.querySelector('#inputsidebar9').value,1);
      fifth_subject_credit_res = cal(document.querySelector('#inputsidebar10').value,3);
      total = first_subject_credit_res+second_subject_credit_res+third_subject_credit_res+fourth_subject_credit_res+fifth_subject_credit_res;
        break;
    case "M":
        first_subject_credit_res = cal( document.querySelector('#inputsidebar11').value,3);
        second_subject_credit_res = cal(document.querySelector('#inputsidebar12').value,3);
        third_subject_credit_res = cal(document.querySelector('#inputsidebar13').value,8);
        fourth_subject_credit_res = cal(document.querySelector('#inputsidebar14').value,1);
        fifth_subject_credit_res = cal(document.querySelector('#inputsidebar15').value,3);
        total = first_subject_credit_res+second_subject_credit_res+third_subject_credit_res+fourth_subject_credit_res+fifth_subject_credit_res;
          break;

    case "L":
        first_subject_credit_res = cal( document.querySelector('#inputsidebar16').value,3);
        second_subject_credit_res = cal(document.querySelector('#inputsidebar17').value,3);
        third_subject_credit_res = cal(document.querySelector('#inputsidebar18').value,8);
        fourth_subject_credit_res = cal(document.querySelector('#inputsidebar19').value,1);
        fifth_subject_credit_res = cal(document.querySelector('#inputsidebar20').value,3);
        total = first_subject_credit_res+second_subject_credit_res+third_subject_credit_res+fourth_subject_credit_res+fifth_subject_credit_res;
           break;
    case "I":
        first_subject_credit_res = cal( document.querySelector('#inputsidebar21').value,3);
        second_subject_credit_res = cal(document.querySelector('#inputsidebar22').value,3);
        third_subject_credit_res = cal(document.querySelector('#inputsidebar23').value,8);
        fourth_subject_credit_res = cal(document.querySelector('#inputsidebar24').value,1);
        fifth_subject_credit_res = cal(document.querySelector('#inputsidebar25').value,3);
        total = first_subject_credit_res+second_subject_credit_res+third_subject_credit_res+fourth_subject_credit_res+fifth_subject_credit_res;
           break;
    case "T":
        first_subject_credit_res = cal( document.querySelector('#inputsidebar26').value,3);
        second_subject_credit_res = cal(document.querySelector('#inputsidebar27').value,3);
        third_subject_credit_res = cal(document.querySelector('#inputsidebar28').value,8);
        fourth_subject_credit_res = cal(document.querySelector('#inputsidebar29').value,1);
        fifth_subject_credit_res = cal(document.querySelector('#inputsidebar30').value,3);
        total = first_subject_credit_res+second_subject_credit_res+third_subject_credit_res+fourth_subject_credit_res+fifth_subject_credit_res;
            break;

    default:
    }
    let total_sgpa=total/18;
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
        document.querySelector('#inputsidebar17').value='';
        document.querySelector('#inputsidebar18').value='';
        document.querySelector('#inputsidebar19').value='';
        document.querySelector('#inputsidebar20').value='';
        document.querySelector('#inputsidebar21').value='';
        document.querySelector('#inputsidebar22').value='';
        document.querySelector('#inputsidebar23').value='';
        document.querySelector('#inputsidebar24').value='';
        document.querySelector('#inputsidebar25').value='';
        document.querySelector('#inputsidebar26').value='';
        document.querySelector('#inputsidebar27').value='';
        document.querySelector('#inputsidebar28').value='';
        document.querySelector('#inputsidebar29').value='';
        document.querySelector('#inputsidebar30').value='';
    })}