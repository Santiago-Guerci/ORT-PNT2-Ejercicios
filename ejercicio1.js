const preparativos = [
    { requisito: "documentos al dia", valor: true },
    { requisito: "reservas del hotel", valor: false },
    { requisito: "transporte confirmado", valor: true },
    { requisito: "seguro de viaje", valor: true },
    { requisito: "dinero", valor: false }
]

const listoParaViajar = (lista) => {
    let faltantes = lista.filter(item => !item.valor).map(item => item.requisito);
    if( faltantes.length === 0) {
        console.log("¡Listo para viajar!");
    } else {
        console.log("No puedes viajar, te faltan: " + faltantes.join(", "));
    }
}

listoParaViajar(preparativos);