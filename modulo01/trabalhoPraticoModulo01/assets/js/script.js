window.addEventListener('load', start);

function start() {
  first_number = document.querySelector('#first_number');
  second_number = document.querySelector('#second_number');

  first_number.addEventListener('blur', (e) => {
    superCalc(first_number.value, second_number.value);
  });

  second_number.addEventListener('blur', (e) => {
    superCalc(first_number.value, second_number.value);
  });
}

function superCalc(a, b) {
  a = a ? parseInt(a) : 0;
  b = b ? parseInt(b) : 0;
  soma = document.querySelector('#soma');
  subtracao_a_b = document.querySelector('#subtracao_a_b');
  subtracao_b_a = document.querySelector('#subtracao_b_a');
  multiplicacao = document.querySelector('#multiplicacao');
  divisao_a_b = document.querySelector('#divisao_a_b');
  divisao_b_a = document.querySelector('#divisao_b_a');
  quadrado_a = document.querySelector('#quadrado_a');
  quadrado_b = document.querySelector('#quadrado_b');
  divisor_inteiro_a = document.querySelector('#divisor_inteiro_a');
  divisor_inteiro_b = document.querySelector('#divisor_inteiro_b');
  fatorial_a = document.querySelector('#fatorial_a');
  fatorial_b = document.querySelector('#fatorial_b');

  soma.value = a + b;
  subtracao_a_b.value = a - b;
  subtracao_b_a.value = b - a;

  multiplicacao.value = a * b;
  divisao_a_b.value = formatNumber(a / b);
  divisao_b_a.value = formatNumber(b / a);

  quadrado_a.value = a ** 2;
  quadrado_b.value = b ** 2;
  divisor_inteiro_a.value = divisorInteiro(a);

  divisor_inteiro_b.value = divisorInteiro(b);
  fatorial_a.value = fatorial(a);
  fatorial_b.value = fatorial(b);
}

function fatorial(n) {
  let f = [];
  for (let i = n; i > 0; i--) {
    f.push(i);
  }
  return n ? f.reduce((a, b) => a * b) : 0;
}

function divisorInteiro(n) {
  let di = [];
  let times = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      di.push(i);
      times++;
    }
  }
  return di.toString() + ` (${times})`;
}

function formatNumber(n) {
  return new Intl.NumberFormat('pt-BR').format(n.toFixed(2));
}
