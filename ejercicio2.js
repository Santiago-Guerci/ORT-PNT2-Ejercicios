const prepararPedido = async () => {
  try {
    await Promise.all([await prepararEnsalada(), await prepararHamburguesa(), await prepararBebida(), await prepararPostre()]);
    console.log("Pedido completo");
  } catch (error) {
    console.error("Error al preparar el pedido:", error);
  }
};

const prepararEnsalada = async () => {
  setTimeout(() => console.log("Ensalada lista"), 4000);
  return;
};

const prepararHamburguesa = async () => {
  setTimeout(() => console.log("Hamburguesa lista"), 8000);
  return;
};

const prepararBebida = async () => {
  setTimeout(() => console.log("Bebida lista"), 2000);
  return;
};

async function prepararPostre() {
    setTimeout( () => console.log("Postre listo"), 10000);
    return;
}

prepararPedido();
