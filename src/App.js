import React, { useState } from "react";
import * as S from "./styles";

export default function App() {
  const [inputVal, setInputVal] = useState(0);
  const [saldo, setSaldo] = useState(0);
  const [movimentacao, setMovimentacao] = useState([]);
  const [extrato, setExtrato] = useState(false);

  let data = new Date();
  let hora = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
  let hoje = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;

  const handleChange = (e) => {
    setInputVal(parseFloat(e.target.value));
    console.log(e.target.value);
  };

  const handleDeposito = () => {
    const total = saldo + inputVal;
    setSaldo(parseFloat(total));
    let newMovimentacao = [
      ...movimentacao,
      `Depósito de R$: ${inputVal} no dia ${hoje} as ${hora}`
    ];
    setMovimentacao(newMovimentacao);
  };

  const handleSaque = () => {
    if (saldo < inputVal) {
      alert("Saldo insuficiente!");
    } else {
      const total = saldo - inputVal;
      setSaldo(parseFloat(total));
      let newMovimentacao = [
        ...movimentacao,
        `Saque de R$: ${inputVal} no dia ${hoje} as ${hora}`
      ];
      setMovimentacao(newMovimentacao);
    }
  };

  return (
    <>
      <S.GlobalStyle />
      <S.AppContainer>
        <h1>Minha poupança $$$</h1>
        <p>Saldo: R$ {saldo}</p>
        <input type="number" onChange={handleChange} placeholder="R$..." />
        <S.Buttons>
          <button onClick={handleDeposito}>Depósito</button>
          <button onClick={handleSaque}>Saque</button>
          <button onClick={() => setExtrato(true)}>Extrato</button>
        </S.Buttons>
        {extrato && (
          <ul>
            {movimentacao.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        )}
      </S.AppContainer>
    </>
  );
}
