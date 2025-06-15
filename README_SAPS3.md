# 🏥 Calculadora SAPS 3 – Web App Interativo

Este projeto é uma calculadora interativa do **SAPS 3 (Simplified Acute Physiology Score 3)**, utilizada para estimar a gravidade clínica e a mortalidade hospitalar de pacientes admitidos em Unidades de Terapia Intensiva (UTI).

A ferramenta está estruturada em **etapas sucessivas**, com interface clara e responsiva, simulando a lógica de uso da MDCalc.

---

## ✨ Funcionalidades

- ✅ Interface 100% web, responsiva e leve
- ✅ Divisão por etapas: identificação, admissão, clínica e laboratório
- ✅ Checklist de variáveis com valores validados
- ✅ Cálculo automático do escore SAPS 3
- ✅ Estimativa de mortalidade (%) com fórmula oficial:

  \[
  x = −32{,}6659 + \ln(\text{SAPS 3} + 20{,}5958) × 7{,}3068
  \]
  \[
  \text{Mortalidade (\%)} = \left( \frac{e^x}{1 + e^x} \right) × 100
  \]

- ✅ Botão para exportar o resultado como PDF
- ✅ Pode ser hospedada como site estático (GitHub Pages, Render, Vercel)

---

## 📂 Como usar

1. Faça o download ou clone este repositório:

```bash
git clone https://github.com/seu-usuario/saps3-calculadora.git
```

2. Abra o arquivo `index.html` no navegador

3. Preencha as informações solicitadas em cada etapa

4. Ao final, visualize:
   - Escore SAPS 3 total
   - Mortalidade hospitalar estimada
   - Opção para baixar como PDF

---

## 🚀 Deploy em site estático (Render)

1. Suba os arquivos no seu repositório GitHub
2. Acesse: [https://render.com](https://render.com)
3. Clique em **“New” > “Static Site”**
4. Configure:
   - **Repositório:** selecione o repositório do projeto
   - **Build command:** *(deixe em branco)*
   - **Publish directory:** `.` (raiz)
5. Clique em **Create Static Site**

Pronto! A aplicação estará online com um link como:

```
https://saps3-calculadora.onrender.com
```

---

## 📄 Licença

Uso livre para fins educacionais, clínicos e institucionais. Nenhum dado pessoal é armazenado ou transmitido.

---

Desenvolvido com foco em cuidado intensivo, segurança assistencial e apoio à decisão clínica.
