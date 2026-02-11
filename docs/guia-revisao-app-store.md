# IndicAI - Guia de Uso para Revisao (App Store)

## 1. Resumo do aplicativo
O IndicAI conecta clientes a profissionais de serviçcos, permitindo busca, visualizacãoo de perfil, contato e avaliacao.

## 2. Metadados para revisao
- Nome do app: IndicAI
- Bundle ID iOS: `com.indicai.app`
- Dominio web: `https://ideia-gen.vercel.app`
- Versao enviada: preencher no envio
- Build enviada: preencher no envio

## 3. Ambiente e disponibilidade
- Plataforma alvo da revisao: iOS
- Regioes atendidas: Brasil
- Idioma principal da interface: Portugues (pt-BR)
- Requisitos especiais: nenhum

### 3.1 Como funciona a previa do aplicativo
1. Ao abrir o app, o usuario pode visualizar telas de apresentacao e navegacao inicial.
2. A previa mostra a proposta do produto e os caminhos principais de uso antes da jornada completa de conta.
3. Nessa etapa, o usuario entende os fluxos de cliente e profissional e os beneficios de cada perfil.
4. A previa nao substitui autenticacao: para usar recursos completos (perfil, servicos, avaliacao e edicao), e necessario entrar com conta valida.
5. Depois do login, o app direciona para as telas reais do perfil escolhido, com dados do usuario.
6. Em caso de abertura por link compartilhado, o app prioriza abrir o destino interno quando o dominio estiver associado no dispositivo.

## 4. Contas de teste (obrigatorio preencher antes de anexar)
### 4.1 Conta Cliente Teste
- CPF: 02220451240
- Senha: 123456

### 4.2 Conta Profissional Teste
- CPF: 01089610289
- Senha: 123456
- Codigo para ser avaliado por outros usuarios: 352713
- Observacao: conta profissional com perfil ativo para validacao de vitrine e avaliacao.

## 5. Fluxo rapido para o revisor (3-5 minutos)
1. Abrir o app.
2. Entrar com a conta Cliente ou profissional.
3. Ir para a tela inicial e abrir a lista de profissionais.
4. Abrir um card de profissional e verificar dados exibidos.
5. Abrir perfil do usuario e validar atualizacao de dados basicos.
6. Opcional: sair e entrar com conta Profissional para validar a area profissional.

## 6. Fluxos detalhados por perfil
### 6.1 Cliente
1. Login/cadastro.
2. Navegacao na home.
3. Busca de profissional.
4. Abertura de perfil profissional.
5. Interacao (mensagem/acao disponivel no perfil).
6. Criar servico para profissional escolhendo profissao.
7. Avaliacao/feedback (quando habilitado).
8. Denunciar perfis de profissionais.

### 6.2 Profissional
1. Login.
2. Acesso ao perfil.
3. Atualizacao de dados do perfil.
4. Visualizacao de beneficios e recursos do plano (quando aplicavel).
5. Contatar clientes por meio de servicos.
6. Gerenciamento de vitrine/fotos (se disponivel para o plano).
7. Denunciar avaliacoes recebidas.

## 7. Links e deep linking
- Site publico: `https://ideia-gen.vercel.app`
- Exemplo de link de perfil: `https://ideia-gen.vercel.app/profissionais/{id}`
- iOS Universal Links:
  - Associated Domains configurado: `applinks:ideia-gen.vercel.app`
  - Arquivo no dominio: `/.well-known/apple-app-site-association`
- Android App Links:
  - Arquivo no dominio: `/.well-known/assetlinks.json`

## 8. Comportamento esperado de links compartilhados
1. Usuario toca no link compartilhado de profissional.
2. Se o app estiver instalado e o dominio estiver associado, o link abre no app.
3. Caso o app nao esteja instalado, o link abre no site.
4. Se a associacao de dominio ainda estiver em propagacao no dispositivo, o link pode abrir no navegador na primeira tentativa.
5. Em nova tentativa, apos validacao do dominio pelo sistema, o link passa a abrir no app.

## 9. Permissoes solicitadas e motivo
- Camera/Galeria: selecao de foto de perfil e fotos de vitrine.
- Notificacoes: comunicacoes e alertas relevantes de uso.

## 10. Como funcionam as notificacoes push
1. O app solicita permissao de notificacao ao usuario.
2. Com permissao concedida, o usuario recebe alertas de eventos relevantes (ex.: novas interacoes, atualizacoes e avisos de fluxo).
3. As notificacoes sao usadas para melhorar o retorno ao app e nao bloqueiam o uso das funcionalidades principais.
4. Se o usuario negar permissao, o aplicativo continua funcional normalmente.
5. Ao tocar na notificacao, o app abre e direciona para a area relacionada quando houver deeplink associado.
6. Se nao houver destino especifico no payload da notificacao, o app abre na tela principal do perfil do usuario.

## 11. Conteudos de terceiros e moderacao
- Comentarios e avaliacoes sao de usuarios.
- Conteudos podem ser denunciados quando aplicavel no fluxo.
- Se houver conteudo indisponivel no momento da revisao, o restante do app segue operacional.

## 12. Informacoes para evitar atraso na analise
- Nao requer VPN.
- Nao requer dispositivo externo/hardware adicional.
- Nao requer geolocalizacao obrigatoria para fluxo principal.
- Fluxo principal testavel apenas com as contas acima.
- Se algum servico externo estiver intermitente, validar fluxo basico de navegacao e perfis.
- Se permissoes de notificacao/camera forem negadas, o app continua funcional nos fluxos principais.

## 13. Rotas e cenarios recomendados para teste
### 13.1 Rotas de teste rapido
- Home do cliente: aba inicial apos login cliente.
- Lista de profissionais: usar busca por nome/profissao.
- Perfil profissional: abrir por card da lista.
- Perfil do usuario: aba Perfil > editar dados > salvar.

### 13.2 Cenário para validar avaliacao
1. Entrar como Cliente.
2. Buscar profissional.
3. Criar servico e concluir fluxo permitido no build de teste.
4. Registrar avaliacao.
5. Entrar como Profissional e validar exibicao da avaliacao.

## 14. Checklist antes de anexar este documento
- [ ] Contas de teste preenchidas e validadas.
- [ ] Senhas testadas no build enviado.
- [ ] Build e versao preenchidas na secao 2.
- [ ] Links/deep links validados no build atual.
- [ ] Contato de suporte preenchido e disponivel.

## 15. Declaracoes para App Review
- O aplicativo nao utiliza metodos de login ocultos para o fluxo principal.
- O aplicativo nao exige codigo promocional para liberar funcoes basicas de teste.
- O aplicativo nao requer conta externa adicional alem das credenciais de teste fornecidas.
- Caso seja necessario suporte durante a analise, usar o contato da secao 16.

## 16. Contato para o time de revisao
- Nome do responsavel: Jonathan Loureiro Figueiredo
- Email: ideiagenstartup@gmail.com
- Telefone: (92) 99110-9424
- Fuso horario: America/Manaus (UTC-4)

---
Documento preparado para anexar no campo "Anexo" do App Store Connect.
