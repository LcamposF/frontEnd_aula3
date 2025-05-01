# 🧩 Exercícios React – Aula 3

Este repositório contém a solução dos dois exercícios propostos na terceira aula da disciplina de FrontEnd Avançado, utilizando conceitos fundamentais do React como componentização, props, destructuring, arrays com .map() e Fragments.

---

## ✅ Descrição da Atividade

Foi desenvolvido um componente chamado `Aluno`, responsável por renderizar as informações de um aluno, incluindo:

- `nome`
- `email`
- `curso`
- `media`
- `status` (calculado com base na média)

Os dados são extraídos utilizando **destructuring** para tornar o código mais organizado e legível.

---

## 🧩 Parte A

Na primeira etapa da atividade, o foco foi na criação de um componente `Aluno` que exibia as propriedades `nome`, `email` e `curso`. Os dados foram armazenados em um array de objetos no `App.jsx`, e renderizados dinamicamente utilizando o método `.map()`.

---

## 🧩 Parte B

Na segunda parte, o componente `Aluno` foi aprimorado com os seguintes ajustes:

- Uso de **React Fragments (`<> </>`)** no lugar da `<div>` externa, para evitar elementos desnecessários no DOM.
- Inclusão da **propriedade `media`** e cálculo do **`status`** do aluno com base nela:
  - Se `media >= 7.00`, exibe `APROVADO(A)`
  - Caso contrário, exibe `REPROVADO(A)`

🛠️ Código do Componente

![image](https://github.com/user-attachments/assets/991be69d-e59c-4572-8ce6-259dcbfca28a)

💻 Resultado no navegador:

![image](https://github.com/user-attachments/assets/f7fa9d9d-60bd-4274-b7a7-8e8dbebac418)


## ⚙️ Tecnologias e Conceitos Utilizados

- ReactJS
- Componentes Funcionais
- Props e Destructuring
- Array `.map()`
- JSX
- React Fragments
- Lógica condicional (operador ternário)





