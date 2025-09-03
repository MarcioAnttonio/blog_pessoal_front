
function Cadastro() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center">
      <div className="bg-[url('https://i.imgur.com/ZZFAmzo.jpg')] bg-no-repeat bg-cover bg-center lg:block hidden h-screen w-full"></div>

      <form className="flex flex-col justify-center items-center gap-3 w-2/3">
        <h2 className="text-5xl font-bold text-slate-900">Cadastrar</h2>

        <div className="flex flex-col w-full">
          <label htmlFor="nome" className="text-lg">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="email" className="text-lg">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu email"
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="senha" className="text-lg">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite sua senha"
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="confirmarSenha" className="text-lg">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirme sua senha"
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex gap-8 mt-4">
          <button
            type="button"
            className="bg-red-400 hover:bg-red-700 text-white px-4 py-2 rounded"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-indigo-400 hover:bg-indigo-900 text-white px-4 py-2 rounded"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
