
function Home() {
    return (
        <>
            <div className="w-full flex justify-center items-center min-h-[60vh] bg-[#05030e]">
                <div className="flex flex-row items-center justify-between w-4/5">
                    {/* Coluna do texto e botão */}
                    <div className="flex flex-col items-start gap-4">
                        <h2 className="text-5xl font-bold text-white">Seja Bem Vinde!</h2>
                        <p className="text-xl text-white">Expresse aqui os seus pensamentos e opiniões</p>
                        <button className="border-2 border-white text-white px-6 py-2 rounded hover:bg-white hover:text-[#3f3186] transition">
                            Nova Postagem
                        </button>
                    </div>
                    {/* Coluna da imagem */}
                    <div>
                        <img
                            src="https://i.imgur.com/VpwApCU.png"
                            alt="Imagem da Página Home"
                            width="400px"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;