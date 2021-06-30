function calculaPrecoTotal(quantidade) {
 let valorMaca
    if (quantidade > 1 && quantidade < 12) {
      valorMaca = quantidade * 1.3
    } else if (quantidade >= 12) {
      valorMaca = quantidade * 1
    }
  return valorMaca
}