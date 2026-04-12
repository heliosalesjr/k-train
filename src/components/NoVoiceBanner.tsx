export default function NoVoiceBanner() {
  const isMac = navigator.platform.toLowerCase().includes('mac')
  const isWindows = navigator.platform.toLowerCase().includes('win')

  return (
    <div className="bg-amber-950/40 border border-amber-700/50 rounded-xl p-4 text-sm space-y-2">
      <div className="flex items-center gap-2 text-amber-300 font-medium">
        <span>⚠️</span> Voz coreana não encontrada
      </div>
      <p className="text-slate-400">
        Para ouvir a pronúncia real, você precisa instalar uma voz coreana no sistema:
      </p>
      <ul className="text-slate-400 space-y-1 ml-4">
        {isMac && (
          <>
            <li>• <strong className="text-slate-300">Mac:</strong> Configurações do Sistema → Acessibilidade → Conteúdo falado → Vozes do sistema → Adicionar <em>Yuna</em> (coreano)</li>
          </>
        )}
        {isWindows && (
          <li>• <strong className="text-slate-300">Windows:</strong> Configurações → Hora e idioma → Fala → Adicionar vozes → Coreano</li>
        )}
        {!isMac && !isWindows && (
          <li>• Adicione uma voz coreana (ko-KR) nas configurações de acessibilidade/fala do seu sistema.</li>
        )}
        <li>• Ou use o <strong className="text-slate-300">Google Chrome</strong> — ele geralmente inclui vozes coreanas sem instalação adicional.</li>
      </ul>
    </div>
  )
}
