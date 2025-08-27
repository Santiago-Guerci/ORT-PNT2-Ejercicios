const prepararPedido = async () => {
  try {
    await Promise.all([prepararEnsalada(), prepararHamburguesa(), prepararBebida()]);
    console.log("Pedido completo");
  } catch (error) {
    console.error("Error al preparar el pedido:", error);
  }
};

const prepararEnsalada = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Ensalada lista");
      resolve();
    }, 4000);
  });
};

const prepararHamburguesa = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Hamburguesa lista");
      resolve();
    }, 8000);
  });
};

const prepararBebida = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Bebida lista");
      resolve();
    }, 2000);
  });
};

prepararPedido();
