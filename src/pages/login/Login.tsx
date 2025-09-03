import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://i.imgur.com/H88yIo2.png')" }}>
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Entrar</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="usuario" className="block text-gray-700">Usuário</label>
            <input type="text" id="usuario" name="usuario" className="w-full px-3 py-2 border rounded" />
          </div>
          <div className="mb-6">
            <label htmlFor="senha" className="block text-gray-700">Senha</label>
            <input type="password" id="senha" name="senha" className="w-full px-3 py-2 border rounded" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Entrar</button>
        </form>
        <p className="mt-4 text-center text-sm">
          Ainda não tem uma conta? <Link to="/cadastro" className="text-blue-500 hover:underline">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
