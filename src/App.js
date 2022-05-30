import { useState } from "react";
import "./App.css";
import { PasswordSet } from "./component/PasswordSet";

function App() {
  let [state, setState] = useState({
    generatedPassword: "",
    passwordLength: 28,
    lowerLetters: false, // по умолчание fasle для всех чекбоксов
    upperLetters: false,
    numbers: false,
    symbols: false,
  });
  let updateInput = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value, //обновляет содержимое input
    });
  };
  let updateCheckBox = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked, // изменяет state  true/false для чекбоксов
    });
  };
  let submit = (event) => {
    event.preventDefault(); // без перезагрузки страницы генерирует пароль
    let passwordObj = PasswordSet.getPasswordObj(state);
    let thePassword = PasswordSet.generedPassword(
      passwordObj,
      state.passwordLength
    );
    console.log(thePassword);
    setState({ ...state, generatedPassword: thePassword });
  };

  const copyPassword = () => { 
    const pass = state.generatedPassword;  // копирует сгенерированный пароль из input
    navigator.clipboard.writeText(pass);
    setState({ ...state, generatedPassword: "" });
  };

  return (
    <div className="generator">
      <form onSubmit={submit}>
        <div className="password">
          <input
            type="text"
            name="generatedPassword"
            value={state.generatedPassword}
            onChange={updateInput}
          ></input>
          <button type="button" onClick={copyPassword}>
            copy
          </button>
        </div>
        <div className="range">
          <input
            type="range"
            name="passwordLength"
            min={1}
            max={28}
            onChange={updateInput}
            required={true}
            value={state.passwordLength}
          ></input>
          <span>{state.passwordLength}</span>
        </div>
        <div className="options">
          <div className="option">
            <label>
              <input
                type="checkbox"
                name="lowerLetters"
                onChange={updateCheckBox}
              ></input>
              <span>a-z</span>
            </label>
          </div>
          <div className="option">
            <label>
              <input
                type="checkbox"
                name="upperLetters"
                onChange={updateCheckBox}
              ></input>
              <span>A-Z</span>
            </label>
          </div>
          <div className="option">
            <label>
              <input
                type="checkbox"
                name="numbers"
                onChange={updateCheckBox}
              ></input>
              <span>0-9</span>
            </label>
          </div>
          <div className="option">
            <label>
              <input
                type="checkbox"
                name="symbols"
                onChange={updateCheckBox}
              ></input>
              <span>!#$%</span>
            </label>
          </div>
        </div>
        <button type="submit" className="generate">
          generate
        </button>
      </form>
    </div>
  );
}

export default App;
