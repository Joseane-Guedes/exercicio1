// Forma 1: Utilizando uma div com texto simples
var shape1 = document.createElement('div');
shape1.className = 'shape';
shape1.textContent = 'Hello World - Forma 1';
document.getElementById('container').appendChild(shape1);

// Forma 2: Utilizando um elemento de cabeçalho h1
var shape2 = document.createElement('h1');
shape2.textContent = 'Hello World - Forma 2';
document.getElementById('container').appendChild(shape2);

// Forma 3: Utilizando um parágrafo p
var shape3 = document.createElement('p');
shape3.textContent = 'Hello World - Forma 3';
document.getElementById('container').appendChild(shape3);