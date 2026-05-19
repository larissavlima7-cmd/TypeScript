//Interface Usuários

interface Usuarios{
    id:number;
    nome:string;
    email:string;
    isAdmin:boolean;
}

//Função para renderizar o perfil, vai receber o objeto e exibir a mensagem
function renderizarPerfil(nome:String, isAdmin:boolean, email:string):void{
    console.log(`Usuario ${nomeisAdmin ? "Administrador" : "Comum"}`);
}