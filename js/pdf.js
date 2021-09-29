window.onload = function(){
    document.getElementById("download").addEventListener("click",()=>{
        const printpage = this.document.getElementById("printpage");
        console.log(printpage);
        console.log(window);
        var opt={
            margin:     1,
            filename:   'result.pdf',
            image:      {type: 'jpeg', quality:0.98},
            html2canvas:{scale: 2},
            jsPDF:      {unit:'in', format:'letter', orientation:'portrait'}
        };
        html2pdf().from(printpage).set(opt).save();
    })
}