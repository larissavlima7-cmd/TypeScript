//Interface Usuários

interface Usuario{
    id:number;
    nome:string;
    email:string;
    isAdmin:boolean;
}

//Função para renderizar o perfil, vai receber o objeto e exibir a mensagem
function renderizarPerfil(usuario: Usuario): void{
    const tipoUsuario = usuario.isAdmin ? "Administrador " : "Comum ";
    console.log(`Usuario ${tipoUsuario}: ${usuario.nome} (${usuario.email})`);
}

const usuarioAdmin: Usuario = {
  id: 1,
  nome: "Larissa",
  email: "larissa@email.com",
  isAdmin: true,
};

renderizarPerfil(usuarioAdmin);