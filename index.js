const numarDouaCifre = (x) => {
  if (x > 9 && x < 100) {
    return "Numar de Doua Cifre";
  } else {
    return "Alt Numar";
  }
};
console.log(numarDouaCifre(34));
