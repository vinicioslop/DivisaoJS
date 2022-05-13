let numerador = Number(prompt("Digite o numerador:"));
let denominador = Number(prompt("Digite o denominador:"));

if (denominador === 0) {
    alert("Não é possível dividir por 0.");
} else {
    let resultado = numerador / denominador;

    alert(`${numerador} dividido por ${denominador} é ${resultado}.`);
}