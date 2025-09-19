# Trackfy - Desafio: Sistema de Monitoramento de Pessoas


Sistema web para monitoramento e visualização de dados de pessoas em diferentes áreas, com dashboard interativo e mapa georreferenciado.

## 🔗 Links Úteis

- **Repositório**: [https://github.com/palomajujubs/trackfy-desafio](https://github.com/palomajujubs/trackfy-desafio)
- **Demo**: [https://palomajujubs.github.io/trackfy-desafio/](https://palomajujubs.github.io/trackfy-desafio/) 


## 🚀 Instruções para Rodar o Projeto

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn




### Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/palomajujubs/trackfy-desafio.git
   cd trackfy-desafio
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra o navegador em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🛠️ Decisões Técnicas Adotadas

### Frontend
- **React 19** - Framework principal para interface de usuário
- **Vite** - Build tool moderno e rápido
- **React Router DOM** - Roteamento client-side
- **Tailwind CSS** - Framework CSS utilitário para estilização

### Visualização de Dados
- **Recharts** - Biblioteca para gráficos interativos (Pizza, Linha, Barra)
- **React Leaflet** - Integração com mapas interativos
- **Leaflet** - Biblioteca de mapas open-source

### Gerenciamento de Estado
- **Context API** - Gerenciamento de estado global sem bibliotecas externas
- **useState/useEffect** - Hooks para estado local e efeitos colaterais

### Estrutura de Dados
- **JSON estático** - Dados mockados em arquivos JSON para simplicidade
- **Filtros dinâmicos** - Sistema de filtros em tempo real

### Arquitetura
```
src/
├── components/          # Componentes reutilizáveis
│   ├── graficos/       # Componentes de visualização
│   └── layout/         # Componentes de layout
├── context/            # Context API para estado global
├── data/              # Dados estáticos (JSON)
├── pages/             # Páginas da aplicação
└── assets/            # Recursos estáticos
```

### Decisões de Design
- **Paleta de cores consistente**: Azul escuro (#050b2e), cinza e branco
- **Design responsivo**: Layout adaptável para diferentes dispositivos
- **UX intuitiva**: Navegação clara e feedback visual
- **Acessibilidade**: Alt texts e contraste adequado

## 📊 Funcionalidades

### Dashboard
- Visualização de dados em gráficos interativos
- Filtros por função, área, tipo e período
- Toggle entre diferentes tipos de gráficos
- Botão para limpar filtros

### Mapa Interativo
- Visualização georreferenciada das áreas
- Marcadores personalizados com cores da marca
- Popups informativos com dados detalhados
- Integração com dados filtrados

### Navegação
- Sistema de roteamento entre páginas
- Botão de voltar consistente
- Layout responsivo

## 🔧 Sugestões de Melhoria

### Performance
- [ ] Implementar lazy loading para componentes pesados
- [ ] Adicionar cache para dados filtrados
- [ ] Otimizar re-renderizações com React.memo
- [ ] Implementar virtualização para grandes datasets

### Funcionalidades
- [ ] Adicionar exportação de dados (PDF, Excel)
- [ ] Implementar busca por texto nas áreas
- [ ] Adicionar filtros por data específica
- [ ] Criar sistema de favoritos para filtros
- [ ] Implementar notificações em tempo real

### UX/UI
- [ ] Adicionar modo escuro
- [ ] Implementar animações de transição
- [ ] Criar onboarding para novos usuários
- [ ] Adicionar tooltips informativos
- [ ] Implementar drag & drop para filtros

### Backend
- [ ] Integrar com API real
- [ ] Implementar autenticação e autorização
- [ ] Adicionar persistência de dados
- [ ] Criar sistema de logs
- [ ] Implementar cache Redis

### Testes
- [ ] Adicionar testes unitários (Jest)
- [ ] Implementar testes de integração
- [ ] Criar testes E2E (Cypress)
- [ ] Adicionar cobertura de código

### DevOps
- [ ] Configurar CI/CD
- [ ] Implementar Docker
- [ ] Adicionar monitoramento (Sentry)
- [ ] Configurar CDN para assets

## 📝 Dados do Projeto

O projeto utiliza dados mockados contendo:
- **AnexoII.json**: Dados de pessoas por área, função e período
- **list.json**: Configurações de áreas e funções disponíveis

### Estrutura dos Dados
```json
{
  "dataHora": "2025-08-01T10:30:00",
  "area": "Oficina Central",
  "funcao": "Pintor",
  "quantidade": 2
}
```

## 🎨 Paleta de Cores

- **Primária**: #050b2e (Azul escuro)
- **Secundária**: #3941D1 (Azul médio)
- **Acentos**: #60A5FA, #93C5FD, #BFDBFE, #DBEAFE
- **Neutros**:  #gray-600, #white

## 📱 Responsividade

O projeto foi desenvolvido com foco em responsividade:
- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm, md, lg, xl
- **Grid System**: CSS Grid e Flexbox
- **Componentes Adaptáveis**: Toggle, botões e formulários

## 👥 Equipe

Desenvolvido como parte do desafio técnico da Trackfy.

---

**Trackfy** - Monitoramento inteligente de pessoas e áreas