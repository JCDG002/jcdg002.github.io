function downloadPdf(){
    const element= document.querySelector('.container-lg')
    const opt= {
        margin: 0,
        filename: 'hoja_de_vida_jcdg.pdf',
        image: {type: 'jpeg', quality: 1},
        html2canvas: {scale:2, useCors:true},  //useCors es para llamar a la imagen desde una carpeta cualquiera
        jsPDF: {unit: 'mm', format: 'letter', orientation: 'portrait'},
        pagebreak: {mode: ['css','legacy']}
    };
    html2pdf().set(opt).from(element).save();
}