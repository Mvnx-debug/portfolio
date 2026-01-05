# Portfolio - Marcos Vinicius Nalin 🚀

Portfólio profissional desenvolvido com **HTML5, CSS3 moderno e JavaScript puro**. Um site focado em **performance, acessibilidade e boas práticas de desenvolvimento**.

> **Status**: ✅ Pronto para produção | **Last Updated**: 2024

---

## 👨‍💻 Sobre Mim

Sou um desenvolvedor **Full Stack** apaixonado por criar aplicações web modernas, rápidas e acessíveis. Trabalho com:

- **Backend**: Bun + Elysia, TypeScript, Drizzle ORM, PostgreSQL, FastAPI
- **Frontend**: React, Tailwind CSS, Vanilla JavaScript
- **Testing**: Jest, E2E tests
- **Tools**: TypeScript, Linux, Git

---

## 🎯 Destaques do Projeto

### ⚡ Performance
- **Lazy Loading** com IntersectionObserver (200px rootMargin)
- **CSS Containment** para isolamento de rendering
- **RequestAnimationFrame** para scroll smoothing
- **Passive Event Listeners** para melhor performance

### 🔒 Segurança
- ✅ Proteção contra **tabnabbing** (`rel="noopener noreferrer"`)
- ✅ HTML5 semântico com **ARIA labels**
- ✅ Sem vulnerabilidades XSS

### ♿ Acessibilidade
- ✅ WCAG 2.1 compliant
- ✅ Keyboard navigation suportada
- ✅ Screen reader friendly
- ✅ Contrast ratio apropriado

### 📱 Responsividade
- ✅ Mobile-first approach
- ✅ 5 breakpoints testados (400px, 576px, 768px, 992px, 1200px+)
- ✅ Grid 4 colunas (desktop) → 1 coluna (mobile)

---

## 🔧 Tech Stack

### Frontend
```json
{
  "html": "5",
  "css": "3 (com containment, will-change, grid responsivo)",
  "javascript": "Vanilla (sem frameworks desnecessários)",
  "frameworks": ["Bootstrap 5.3.6", "Animate.css 4.1.1"],
  "icons": "Font Awesome 6.4.0",
  "features": ["LazyLoading", "Typewriter Animation", "Modal System"]
}
```

### Backend Stack (Showcased)
- **Bun** - Runtime JavaScript rápido
- **Elysia** - Framework web type-safe
- **TypeScript** - Type safety
- **Drizzle ORM** - Query builder moderno
- **PostgreSQL** - Banco relacional
- **Jest** - Testing framework
- **FastAPI** - Python backend

---

## 📂 Estrutura do Projeto

```
portfolio/
├── index.html                 # Página principal (760 linhas)
├── assets/
│   ├── style.css             # Estilos (1236 linhas, otimizado)
│   ├── scripts/
│   │   └── scripts.js        # JavaScript (164 linhas, limpo)
│   ├── img/
│   │   ├── imobiliaria/      # Imagens de projetos
│   │   └── *.jpg             # Fotos pessoais
│   └── upload/               # Diretório para uploads
├── README.md                 # Este arquivo
├── AUDIT_REPORT.md          # Relatório de auditoria completo
└── .gitignore               # Padrões de exclusão
```

---

## ✨ Principais Funcionalidades

### 1. **Hero Section Animado**
- Typewriter effect rotacionando 4 tecnologias
- Tech pills indicando stack atual
- Foto de perfil com ícones de tech

### 2. **8 Projetos Showcased**
- Pimbell Backend (Elysia + Drizzle)
- API Elysia + Bun (TypeScript)
- Auth Game (Full Stack)
- Imobiliária (React + Tailwind)
- Leitor de PDF (Python)
- InterCalhas (Frontend)
- Clone Discord (CSS avançado)
- Clone YouTube (HTML5 + CSS3)

### 3. **Modais Interativos**
- Carregamento lazy de imagens
- Links para repositórios GitHub
- Stack utilizado em cada projeto
- Descrição técnica detalhada

### 4. **Navbar Responsiva**
- Scroll effect (transparência dinâmica)
- Menu collapse em mobile
- Smooth navigation
- Links ativos indicados

### 5. **Seções Principais**
- **Sobre**: Apresentação técnica
- **Habilidades**: Frontend, Backend, Tools
- **Projetos**: 8 projetos com modais
- **Experiência**: Timeline ou histórico
- **Contato**: Links sociais

---

## 🎓 Boas Práticas Implementadas

### Código
- ✅ **DRY** - CSS Variables, JS Constants
- ✅ **SOLID** - Single Responsibility, Open/Closed
- ✅ **Semantic HTML** - `<section>`, `<nav>`, `<article>`
- ✅ **Performance Optimization** - Lazy loading, scroll throttling
- ✅ **Security** - `rel="noopener noreferrer"`, sem vulnerabilidades

### Documentação
- ✅ Comentários claros no código
- ✅ Nomes descritivos de classes/variáveis
- ✅ Relatório de auditoria incluído

---

## 📊 Performance Metrics

| Métrica | Status |
|---------|--------|
| **Lazy Loading** | ✅ Implementado (200px margin) |
| **CSS Containment** | ✅ Em produção |
| **Scroll Optimization** | ✅ RequestAnimationFrame |
| **Images Optimization** | ✅ `loading="lazy"`, `decoding="async"` |
| **Acessibilidade** | ✅ WCAG 2.1 compliant |
| **Mobile Responsive** | ✅ 5 breakpoints |

---

## 🚀 Como Usar

### 1. Clone o repositório
```bash
git clone https://github.com/Mvnx-debug/portfolio
cd portfolio
```

### 2. Abra no navegador
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### 3. Para servir localmente (recomendado)
```bash
# Com Python 3
python -m http.server 8000

# Com Node.js / Bun
bun --bun run assets/scripts/scripts.js
# ou
npx http-server
```

Acesse: `http://localhost:8000`

---

## 📋 Checklist de Qualidade

- ✅ HTML validado (W3C compliant)
- ✅ CSS sem errors de sintaxe
- ✅ JavaScript sem console errors
- ✅ Performance otimizada
- ✅ Acessível e responsivo
- ✅ Segurança verificada
- ✅ Código limpo e bem estruturado
- ✅ Documentação completa

---

## 🔗 Links Importantes

- 🌐 **Portfolio**: https://mvnx-debug-portfolio.netlify.app/
- 👨‍💼 **LinkedIn**: https://linkedin.com/in/marcos-vinicius-nalin
- 🐙 **GitHub**: https://github.com/Mvnx-debug
- 📧 **Email**: marcosnalin3@gmail.com

---

## 📈 Roadmap Futuro

- [ ] Minificar CSS e JavaScript em produção
- [ ] Service Worker para PWA (offline support)
- [ ] Analytics integrado
- [ ] Contact Form com validação backend
- [ ] Blog seção
- [ ] Dark mode toggle
- [ ] Versão em React (para práticas avançadas)
- [ ] Integração com API pessoal

---

## 📝 Relatórios

- [AUDIT_REPORT.md](AUDIT_REPORT.md) - Relatório completo de auditoria de qualidade (100%)

---

## 🤝 Contribuições

Este é um projeto pessoal, mas sugestões são bem-vindas! Abra uma issue ou pull request.

---

## 📄 Licença

Projeto pessoal - Livre para uso e modificação.

---

**Desenvolvido com ❤️ e café ☕**

*"Code is poetry, make it clean."* - Mvnx-debug

