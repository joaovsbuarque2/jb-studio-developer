# JB Studio Developer - Eleva

Este projeto é um website responsivo e moderno desenvolvido em React, representando a empresa **JB Studio Developer** e apresentando seu principal produto: o app **Eleva**.

## 📋 Sobre o Projeto

### JB Studio Developer

Uma empresa de desenvolvimento de software focada em soluções inovadoras, aplicações móveis e web. O website principal (/ e /js-studio) serve como portfólio da empresa, apresentando:

- **Página Inicial**: Apresentação da empresa e seus valores
- **Sobre**: História e missão da JB Studio Developer
- **Empresa**: Detalhes sobre a equipe e serviços oferecidos
- **Projetos**: Portfólio de trabalhos realizados
- **Contato**: Formulário e informações para contato

### Eleva - App de Produtividade Gamificado

O **Eleva** é um aplicativo de produtividade revolucionário que transforma tarefas cotidianas em uma experiência gamificada. Desenvolvido para iOS e Android, o app incentiva usuários a completarem tarefas através de:

- **Gamificação Completa**: Sistema de XP, níveis e conquistas
- **Torneios e Competição**: Desafios coletivos e rankings
- **Social**: Integração com amigos e comunidades
- **Análises Inteligentes**: Relatórios detalhados de produtividade
- **Missões Épicas**: Transformação de tarefas rotineiras em aventuras

O landing page do Eleva está integrado neste website em `/eleva`, incluindo seções de recursos, roadmap e contato.

## 🛠️ Tecnologias Utilizadas

- **Frontend**: React 19.1.1 com React Router DOM
- **UI/UX**: Bootstrap 5.3.8 e React Bootstrap
- **Animações**: AOS (Animate On Scroll)
- **Build Tool**: Create React App
- **Linter/Formatter**: ESLint + Prettier
- **Testes**: Jest e React Testing Library

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes compartilhados
│   ├── Header.js        # Cabeçalho principal
│   ├── Home.js          # Página inicial do portfólio
│   ├── About.js         # Sobre a empresa
│   ├── Company.js       # Detalhes da empresa
│   ├── Projects.js      # Portfólio de projetos
│   └── Contact.js       # Formulário de contato
├── components/eleva/     # Componentes específicos do Eleva
│   ├── ElevaHome.js     # Landing page hero
│   ├── ElevaAbout.js    # Sobre o app
│   ├── ElevaFeatures.js # Funcionalidades
│   ├── ElevaRoadmap.js  # Roadmap de desenvolvimento
│   ├── ElevaContact.js  # Contato para o app
│   └── ElevaHeader.js   # Cabeçalho do Eleva
├── pages/               # Páginas principais
│   ├── JSStudioApp.js   # App principal do portfólio
│   └── ElevaApp.js      # App do Eleva
├── assets/              # Imagens e recursos estáticos
└── App.js               # Roteamento principal
```

## 🚀 Instalação e Execução

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Yarn ou npm

### Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd jb-studio-developer
```

2. Instale as dependências:

```bash
yarn install
# ou
npm install
```

3. Execute o projeto em modo desenvolvimento:

```bash
yarn start
# ou
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

### Scripts Disponíveis

- **`yarn start`** / **`npm start`**: Inicia o servidor de desenvolvimento
- **`yarn build`** / **`npm run build`**: Gera build de produção otimizado
- **`yarn test`** / **`npm test`**: Executa testes em modo interativo
- **`yarn eject`** / **`npm run eject`**: Ejeta configurações do Create React App (irreversível)
- **`yarn lint`** / **`npm run lint`**: Executa linting no código
- **`yarn format`** / **`npm run format`**: Formata código com Prettier

## 🌟 Funcionalidades

### Website JB Studio Developer

- Design responsivo e moderno
- Navegação fluida entre seções
- Animações suaves com AOS
- Formulário de contato funcional
- Integração com landing page do Eleva

### Landing Page do Eleva

- Hero section com call-to-action
- Apresentação das funcionalidades principais
- Roadmap de desenvolvimento
- Formulário de contato específico
- Design gamificado refletindo a proposta do app

## 📈 Roadmap do Eleva

### ✅ Fase Atual (Beta)

- Sistema básico de tarefas gamificado
- Interface de usuário inicial
- Funcionalidades core implementadas

### 🚧 Próximas Fases

- **Lançamento MVP**: Versão inicial para iOS/Android
- **Social Features**: Sistema de amigos e comunidades
- **Torneios**: Competição entre usuários
- **Análises Avançadas**: Dashboards personalizados
- **Integrações**: Conexão com calendários e apps externos

## 📞 Contato

**JB Studio Developer**

- Website: [jb-studio-developer.com](https://jb-studio-developer.com) (exemplo)
- Email: contato@jb-studio-developer.com
- LinkedIn: [linkedin.com/company/jb-studio-developer](https://linkedin.com/company/jb-studio-developer)

Para o app Eleva:

- Página do app: `/eleva` neste website
- Email: eleva@jb-studio-developer.com

## 📄 Licença

Este projeto é privado e propriedade da JB Studio Developer.

---

_Desenvolvido com ❤️ pela equipe JB Studio Developer_
