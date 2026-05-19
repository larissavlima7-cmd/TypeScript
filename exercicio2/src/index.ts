//Interface Estudante 
interface Estudante {
    nome: string;
    notas: number[];

}

function calcularMedia(estudante:Estudante):void{
    let soma = 0;

    for (let i = 0; i < estudante.notas.length; i++) {
      soma += estudante.notas[i]!;
    }

    const media = soma / estudante.notas.length;

    const situacao = media >= 7 ? "Aprovado(a)" : "Reprovado(a)";

    console.log(`Aluno(a): ${estudante.nome}`);
    console.log(`Média: ${media.toFixed(1)}`);
    console.log(`Situação: ${situacao}`);
    console.log("---------------------------------------");
}

const aluno1: Estudante = {
  nome: "Larissa Vieira",
  notas: [7.0, 10.0, 9.0],
};

calcularMedia(aluno1);