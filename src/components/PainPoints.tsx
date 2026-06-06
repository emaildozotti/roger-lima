import { FadeIn } from './FadeIn'

// ════════════════════════════════════════════════════════════════════
// COPY — SUBSTITUIR POR CLIENTE (lp-copy.md → Bloco 2 Pain Points)
// ════════════════════════════════════════════════════════════════════
const COPY = {
  heading: 'Você não está aqui',
  headingEm: 'só pela teoria.',
  pains: [
    'Você grita por bobagem com quem mais ama e se odeia depois. Promete que da próxima vez vai reagir diferente. Reage igual.',
    'Está vendo no seu casamento o mesmo padrão que viu na casa dos seus pais. Discussão por bobagem, silêncio depois, ressentimento acumulado.',
    'Tem medo do que seu filho vai lembrar de você quando crescer. Vê o olhar de medo dele em certos momentos e por dentro sabe que está marcando o que ele vai ser.',
    'Já fez terapia antes e ficou em conversa bonita sobre infância. Voltou pra rotina, o padrão continua. Sente que conhece todos os próprios problemas mas não consegue mudar.',
  ],
  transition: 'Essa é a primeira geração que para de carregar o padrão emocional da família de origem. E ela só para quando treina a regulação que ninguém ensinou em casa.',
}
// ════════════════════════════════════════════════════════════════════

export default function PainPoints() {
  return (
    <section
      id="dores"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-bg-light)' }}
    >
      <div className="container-ultra">
        <FadeIn>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              color: 'var(--color-text-main)',
              fontWeight: 400,
            }}
          >
            {COPY.heading}{' '}
            <em style={{ color: 'var(--color-secondary)' }}>{COPY.headingEm}</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {COPY.pains.map((pain, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                className="flex gap-5 p-6 md:p-8 group transition-all duration-500"
                style={{
                  backgroundColor: 'var(--color-bg-warm)',
                  borderRadius: '12px 4px 12px 4px',
                  border: '1px solid transparent',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = `color-mix(in srgb, var(--color-secondary) 40%, transparent)`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'transparent'
                }}
              >
                <span
                  className="shrink-0 eyebrow-ultra"
                  style={{
                    color: 'var(--color-secondary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '13px',
                    paddingTop: '2px',
                    opacity: 0.6,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  className="text-base md:text-lg leading-relaxed"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-text-main)',
                    fontWeight: 400,
                  }}
                >
                  {pain}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 md:mt-16 flex items-center gap-6">
            <div
              style={{
                width: '2px',
                height: '60px',
                backgroundColor: 'var(--color-secondary)',
                opacity: 0.7,
                flexShrink: 0,
              }}
              aria-hidden="true"
            />
            <p
              className="text-xl md:text-2xl leading-snug"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-primary)',
                fontWeight: 400,
                fontStyle: 'italic',
              }}
            >
              {COPY.transition}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
