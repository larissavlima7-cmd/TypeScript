"use strict";
//Interface Usuários
Object.defineProperty(exports, "__esModule", { value: true });
//Função para renderizar o perfil, vai receber o objeto e exibir a mensagem
function renderizarPerfil(usuario) {
    const tipoUsuario = usuario.isAdmin ? "Administrador " : "Comum ";
    console.log(`Usuario ${tipoUsuario}: ${usuario.nome} (${usuario.email})`);
}
const usuarioAdmin = {
    id: 1,
    nome: "Larissa",
    email: "larissa@email.com",
    isAdmin: true,
};
renderizarPerfil(usuarioAdmin);
//# sourceMappingURL=index.js.map