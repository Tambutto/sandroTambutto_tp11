
// -- Ajuste tarifario de energía eléctrica --

let pagoMes = 12000;
let consumoKwH = 200;

let pagoFinal = (consumoKwH > 300) ? pagoMes * 1.20 : pagoMes;
console.log(`Debido a que su hogar tuvo un consumo de ${consumoKwH} kwh, en base al ajuste tarifario (hogares con consumo mayor a 300 0kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $${pagoFinal}`);
