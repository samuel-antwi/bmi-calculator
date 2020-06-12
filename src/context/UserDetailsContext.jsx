import React, { createContext, useState, useEffect } from 'react';

export const UserDetailsContext = createContext();
const UserDetailsContextProvider = (props) => {
  const [minority] = useState([
    'Black African',
    'Black Caribbean',
    'Indian',
    'Mixed',
    'Pakistani',
    'Chinese',
  ]);
  const [other] = useState(['Not stated', 'White']);
  const [userDetails, setUserDetails] = useState({
    height: '',
    weight: '',
    age: '',
    sex: 'Male',
    ethnicGroup: 'Not stated',
    activityLevel: '',
  });
  const [bmi, setBMI] = useState(0);
  const [toggleResults, setToggleResults] = useState(false);
  const [weight, setWeight] = useState({
    healthy: 'a healthy weight',
    obese: 'obese',
    underWeight: 'underweight',
    overweight: 'overweight',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [hide, setHide] = useState(true);

  //   This function handles all the input form changes and append to the state.
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  //   This function resets the form input when the reset buton is clicked.
  const resetForm = () => {
    window.scrollTo(0, 0);
    setUserDetails({
      ...userDetails,
      height: '',
      weight: '',
      age: '',
      sex: '',
      ethnicGroup: '',
      activityLevel: '',
    });
  };

  //   This function calculates the user bmi
  const calculateBMI = (weight, height) => {
    const newheight = height / 100;
    return weight / (newheight * newheight);
  };

  //   Handle bmi form input function
  const handleForm = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    const calculatedBMI = calculateBMI(userDetails.weight, userDetails.height);
    setBMI(calculatedBMI.toFixed(1));
    setToggleResults(true);
    window.scrollTo(0, 0);
  };

  //   This function takes the user back to the form when a button is clicked
  const goBack = () => {
    setToggleResults(false);
  };

  const toggleButton = () => {
    setHide((hide) => (hide = !hide));
  };

  return (
    <UserDetailsContext.Provider
      value={{
        other,
        minority,
        hide,
        toggleButton,
        goBack,
        userDetails,
        bmi,
        toggleResults,
        weight,
        isLoading,
        handleChange,
        resetForm,
        handleForm,
      }}>
      {props.children}
    </UserDetailsContext.Provider>
  );
};

export default UserDetailsContextProvider;
