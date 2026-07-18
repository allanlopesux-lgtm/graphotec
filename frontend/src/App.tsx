function App() {
  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center px-6">

      <section className="max-w-4xl text-center text-white">

        <h1 className="text-5xl font-bold mb-6">
          GRAPHOTEC
        </h1>

        <h2 className="text-2xl mb-6">
          Laboratório Virtual de Grafotecnia
        </h2>

        <p className="text-lg text-slate-300 mb-8">
          Aprenda perícia grafotécnica praticando
          com documentos simulados, análises técnicas
          e inteligência artificial.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg">
          Entrar no Laboratório
        </button>


        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-white/10 p-6 rounded-xl">
            🧪
            <h3 className="font-bold mt-3">
              Casos Simulados
            </h3>
            <p className="text-sm text-slate-300">
              Treine análises com documentos fictícios.
            </p>
          </div>


          <div className="bg-white/10 p-6 rounded-xl">
            🤖
            <h3 className="font-bold mt-3">
              Professor IA
            </h3>
            <p className="text-sm text-slate-300">
              Receba orientação durante os estudos.
            </p>
          </div>


          <div className="bg-white/10 p-6 rounded-xl">
            📚
            <h3 className="font-bold mt-3">
              Biblioteca
            </h3>
            <p className="text-sm text-slate-300">
              Estude métodos e fundamentos técnicos.
            </p>
          </div>

        </div>

      </section>

    </main>
  )
}

export default App