# Calculadora SAPS 3

Esta é uma calculadora web interativa para o escore **SAPS 3 (Simplified Acute Physiology Score 3)**, utilizada na avaliação de gravidade e estimativa de mortalidade de pacientes na admissão à Unidade de Terapia Intensiva (UTI).

---

## 🩺 Funcionalidades

- Interface simples e responsiva baseada em HTML/CSS/JavaScript
- Campos de entrada com os principais critérios clínicos e fisiológicos do SAPS 3
- Cálculo automatizado da pontuação SAPS 3
- Estimativa da **mortalidade hospitalar (%)** com base na fórmula publicada:

  ```
  Mortalidade (%) = [e^x / (1 + e^x)] × 100
  onde x = −32,6659 + ln(SAPS 3 + 20,5958) × 7,3068
  ```

- Campos opcionais para identificação: **Iniciais do paciente** e **número de atendimento**
- Pronto para deploy como site estático

---

## 🛠️ Como usar

1. Clone ou baixe o projeto:
   ```
   git clone https://github.com/seu-usuario/saps3-calculadora.git
   ```

2. Abra o arquivo `index.html` em seu navegador

3. Preencha os campos clínicos disponíveis

4. Clique em **Calcular SAPS 3**

5. Visualize a pontuação estimada e a mortalidade projetada

---

## 🚀 Deploy com Render (Static Site)

1. Suba este projeto no GitHub
2. Acesse: https://render.com
3. Crie um novo **Static Site**
4. Configure:
   - **Build command**: (deixe em branco)
   - **Publish directory**: `.`
5. Após deploy, o site estará online com uma URL pública

---

## 📄 Licença

Uso livre para fins educacionais, clínicos e institucionais. Nenhuma informação pessoal é armazenada.

---

Desenvolvido com ❤️ para apoiar decisões assistenciais em terapia intensiva.
