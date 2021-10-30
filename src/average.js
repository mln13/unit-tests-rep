/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const calculateAverage = (array, sumArray) => {
  // let averageNow = sumArray / array.length;
  // if (averageNow % 1 === 0) {
  //   return averageNow;
  // }
  // return Math.round(averageNow);
};

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let identificador = 0;
  const sum = array.reduce((acc, element) => {
    if (typeof element !== 'number') {
      identificador += 1;
      return undefined;
    }
    acc += element;
    return acc;
  });

  if (identificador > 0) {
    return undefined;
  }
  if (typeof sum === 'number') {
    return Math.round(sum / array.length);
  }
};

module.exports = average;
