import { ExternalLink, PartyPopper, Terminal, Sparkles } from "lucide-react"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3 mb-6">
              <PartyPopper className="w-16 h-16 text-purple-400" />
              <Sparkles className="w-12 h-12 text-pink-400" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Party Time API + Frontend
            </h1>
            <p className="text-xl text-slate-300">
              Sistema de gerenciamento de festas com backend Express e frontend React
            </p>
          </div>

          {/* Architecture Info */}
          <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 space-y-6 backdrop-blur">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Terminal className="w-6 h-6 text-purple-400" />
              Arquitetura do Projeto
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Backend */}
              <div className="bg-slate-950/50 border border-purple-500/20 rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-purple-400">🔧 Backend (Express)</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✅ API REST com Express.js</li>
                  <li>✅ MongoDB com Mongoose</li>
                  <li>✅ CORS habilitado</li>
                  <li>
                    ✅ Porta: <code className="text-pink-400">3000</code>
                  </li>
                </ul>
                <div className="pt-3 border-t border-slate-700">
                  <p className="text-sm text-slate-400">Endpoints:</p>
                  <code className="text-xs text-blue-400">/api/parties</code>
                  <br />
                  <code className="text-xs text-blue-400">/api/services</code>
                </div>
              </div>

              {/* Frontend */}
              <div className="bg-slate-950/50 border border-blue-500/20 rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-blue-400">⚛️ Frontend (React)</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>✅ React 18 + Vite</li>
                  <li>✅ React Router</li>
                  <li>✅ Tailwind CSS 4</li>
                  <li>
                    ✅ Porta: <code className="text-pink-400">5173</code>
                  </li>
                </ul>
                <div className="pt-3 border-t border-slate-700">
                  <p className="text-sm text-slate-400">Localização:</p>
                  <code className="text-xs text-blue-400">./frontend/</code>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-slate-900/50 border border-pink-500/20 rounded-2xl p-8 space-y-6 backdrop-blur">
            <h2 className="text-2xl font-bold text-pink-400">🚀 Como Executar</h2>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500 text-white text-sm">
                    1
                  </span>
                  Iniciar o Backend
                </h3>
                <div className="bg-slate-950 border border-slate-700 rounded-lg p-4 font-mono text-sm">
                  <div className="text-slate-400"># Na raiz do projeto</div>
                  <div className="text-green-400">npm install</div>
                  <div className="text-green-400">npm start</div>
                  <div className="text-slate-400 mt-2"># Backend rodando em http://localhost:3000</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white text-sm">
                    2
                  </span>
                  Iniciar o Frontend
                </h3>
                <div className="bg-slate-950 border border-slate-700 rounded-lg p-4 font-mono text-sm">
                  <div className="text-slate-400"># Em outro terminal</div>
                  <div className="text-blue-400">cd frontend</div>
                  <div className="text-blue-400">npm install</div>
                  <div className="text-blue-400">npm run dev</div>
                  {/* <div className="text-slate-400 mt-2"># Frontend rodando em http://localhost:5173</div> */}
                  <div className="text-slate-400 mt-2"># Frontend rodando em http://localhost:5173</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white text-sm">
                    3
                  </span>
                  Acessar a Aplicação
                </h3>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-pink-500/30 rounded-lg p-4">
                  <p className="text-slate-300 mb-3">Abra seu navegador em:</p>
                  <a
                    href="http://localhost:5173"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:scale-105 transition-transform"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Abrir Frontend React
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="bg-slate-900/50 border border-blue-500/20 rounded-2xl p-8 space-y-4 backdrop-blur">
            <h2 className="text-2xl font-bold text-blue-400">✨ Funcionalidades</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-400">Gerenciar Festas</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• Criar, editar e deletar festas</li>
                  <li>• Adicionar serviços às festas</li>
                  <li>• Controlar orçamento</li>
                  <li>• Upload de imagens</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-400">Catálogo de Serviços</h4>
                <ul className="text-sm text-slate-300 space-y-1">
                  <li>• CRUD completo de serviços</li>
                  <li>• Definir preços</li>
                  <li>• Descrições detalhadas</li>
                  <li>• Imagens dos serviços</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-slate-900/50 border border-purple-500/20 rounded-2xl p-8 backdrop-blur">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">🛠️ Stack Tecnológica</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-700">
                <div className="text-2xl mb-2">⚛️</div>
                <div className="text-sm font-medium">React 18</div>
              </div>
              <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-700">
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-sm font-medium">Tailwind CSS</div>
              </div>
              <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-700">
                <div className="text-2xl mb-2">🚀</div>
                <div className="text-sm font-medium">Express.js</div>
              </div>
              <div className="p-4 bg-slate-950/50 rounded-lg border border-slate-700">
                <div className="text-2xl mb-2">🍃</div>
                <div className="text-sm font-medium">MongoDB</div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
            <p className="text-yellow-200 text-sm">
              <strong className="text-yellow-400">⚠️ Nota:</strong> Esta página Next.js serve apenas como documentação. O
              frontend React completo está na pasta <code className="bg-slate-900 px-2 py-1 rounded">./frontend/</code>e
              deve ser executado separadamente conforme as instruções acima.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
