# 🌐 Portfólio – Django + React + Docker

Portfólio minimalista e responsivo para centralizar **projetos acadêmicos e profissionais** em diversas áreas:  
- 💻 **Software**  
- 🔬 **Pesquisa**  
- 🔧 **Hardware / Competição**  
- 🤖 **Inteligência Artificial / Dados**

Backend em **Django + DRF**, frontend em **React + Vite + Tailwind**, com orquestração via **Docker Compose**.

---

## 🚀 Tecnologias
- [Django](https://www.djangoproject.com/) + [Django REST Framework](https://www.django-rest-framework.org/)  
- [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TailwindCSS](https://tailwindcss.com/)  
- [PostgreSQL](https://www.postgresql.org/)  
- [Docker](https://www.docker.com/)  

---

## 📦 Estrutura do Projeto
portfolio/
├─ backend/ # Django + DRF (API)
├─ frontend/ # React + Vite + Tailwind (UI)
├─ docker-compose.yml
└─ README.md

## 🔧 Como rodar localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/SEU-USUARIO/portfolio.git
   cd portfolio

2. Copie o arquivo .env.example para .env:
  ```bash
  cp .env.example .env

3. Suba os containers:
  ```bash
  docker compose up --build

4. Acesse:
  Frontend → http://localhost:5173
  Backend → http://localhost:8000/api/projects/