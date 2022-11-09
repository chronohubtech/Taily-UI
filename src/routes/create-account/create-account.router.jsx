import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Components
import { InputField } from '@components/input-field/input-field.component.jsx';
// Static assets
import './create-account.style.css';
import HorizontalLogo from '@assets/static/horizonal-logo.svg';

function CreateAccountRouter() {
  const defaultSignUpField = {
    username: '',
    password: '',
    dogsName: ''
  };

  const [signUpFormFields, setSignUpFormFields] = useState(defaultSignUpField);
  const { username, password, dogsName } = signUpFormFields;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpFormFields({ ...signUpFormFields, [name]: value });
  };

  return (
    <>
      <section className={'signup__section'}>
        <div className={'signup__container'}>
          <img src={HorizontalLogo} width={180} height={71} alt="Taily horizontal logo" />

          <h4 className={'signup__header'}>Create an account</h4>

          <form action="" className={'signup__form'} onSubmit={handleSubmit}>
            <InputField
              label={'Username'}
              type="text"
              placeholder={'tailydo'}
              onChange={handleChange}
              name={'username'}
              value={username}
              required
            />

            <InputField
              label={'Password'}
              type="password"
              placeholder={'Your dog`s secret'}
              onChange={handleChange}
              name={'password'}
              value={password}
              required
            />

            <p className={'input-note'}>
              Please remember your password because we will not be able to change it due to
              encryption of your data.
            </p>

            <InputField
              label={'What is your dog’s name?'}
              type="text"
              placeholder={'Ex: Shamsey'}
              onChange={handleChange}
              name={'dogsName'}
              value={dogsName}
              required
            />

            <p className={'input-note'}>This is a security question for your account recovery.</p>

            <button className={'mt-10 button__primary'}>Create an account</button>

            <p className={'input-note--signin'}>
              Joined us before?{' '}
              <Link to={'../login'}>
                <span>Login here.</span>
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default CreateAccountRouter;
