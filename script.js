function eliminarDuplicados(arr) {
    let unicos = [];
    for (let i = 0; i < arr.length; i++) {
        let esDuplicado = false;
        for (let j = 0; j < unicos.length; j++) {
            if (arr[i] === unicos[j]) {
                esDuplicado = true;
                break;
            }
        }
        if (!esDuplicado) {
            unicos.push(arr[i]);
        }
    }
    return unicos;
}

let valores = [1,2,3,4,5,6,1,2,34,5,6,]

console.log(eliminarDuplicados(valores))

//Tarea 2

function isPalindromeNormalized(value) {
  const s = String(value).toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversed = s.split('').reverse().join('');
  return s === reversed;
}


console.log(isPalindromeNormalized("anita lava la tina"))

//Tarea 3

// Devuelve { max, min } o lanza error si el array está vacío
function findMinMax(arr) {
  if (!Array.isArray(arr)) throw new TypeError('Se requiere un array');
  if (arr.length === 0) throw new Error('Array vacío');

  // Asumimos que los elementos son comparables (por ejemplo números)
  let max = arr[0];
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const v = arr[i];
    if (v > max) max = v;
    if (v < min) min = v;
  }

  return { max, min };
}

console.log(findMinMax(valores))

function stringLengthCodePoints(s) {
  if (s == null) throw new TypeError('Se requiere una cadena');
  s = String(s);
  let count = 0;
  for (const _ of s) count++;
  return count;
}

console.log(stringLengthCodePoints("anita lava la tina"))