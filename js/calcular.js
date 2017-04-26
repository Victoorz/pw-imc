function calcula(){
    var peso, altura, imc;

    peso = frmIMC.txtPeso.value;
    altura = frmIMC.txtAltura.value;
    peso = parseFloat(peso);
    altura = parseFloat(altura);
    imc = (peso / (altura * altura));
    frmIMC.txtIMC.value = imc.toFixed(1);
} 
