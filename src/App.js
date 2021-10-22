import React from 'react';
import AddressForm from './components/AddressForm';
import Form from './components/Form';
import { Result } from './components/Result';
import { Route, useHistory } from 'react-router-dom';

function App() {
  const [formValues, setFormValues] = React.useState({});
  const history = useHistory();

  const nextStep = (name) => {
    history.push(name);
  };

  console.log(formValues);

  return (
    <div className="App">
      <Route
        path="/"
        render={() => <Form nextStep={nextStep} setFormValues={setFormValues} />}
        exact
      />
      <Route
        path="/address"
        render={() => <AddressForm nextStep={nextStep} setFormValues={setFormValues} />}
      />
      <Route path="/result" render={() => <Result formValues={formValues} />} />
    </div>
  );
}

export default App;
