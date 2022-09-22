import React, { useEffect, useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const verifyForm = () => {
    const emailFormat = /[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]*\w$/;
    const minSize = 6;
    const minName = 12;
    const isEmailValid = emailFormat.test(email);
    const isPasswordValid = password.length >= minSize;
    const isNameValid = name.length >= minName;
    setButtonDisabled(!(isEmailValid && isPasswordValid && isNameValid));
  };
  useEffect(() => {
    verifyForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email, password, name]);

  const handleInputChange = async (target) => {
    if (target.name === 'name') setName(target.value);
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'password') setPassword(target.value);
  };

  return (
    <div className="Login">
      <form className="login-form">
        <h1>Register</h1>
        <label htmlFor="Nome">
          <span>Nome</span>
          <input
            id="name"
            type="text"
            onChange={ ({ target }) => handleInputChange(target) }
            data-testid="common_register__input-name"
            name="name"
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="email">
          <input
            type="text"
            id="email"
            data-testid="common_register__input-email"
            name="email"
            onChange={ ({ target }) => handleInputChange(target) }
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            id="password"
            type="password"
            onChange={ ({ target }) => handleInputChange(target) }
            data-testid="common_register__input-password"
            name="password"
          />
        </label>
        <button
          disabled={ isButtonDisabled }
          type="submit"
          className="login-btn"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
export default Register;
