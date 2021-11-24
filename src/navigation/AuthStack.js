import React from 'react';

import {SingIn, Signup} from '../screens/index';

export default Stack => {
  return (
    <>
      <Stack.Screen name="Login" component={SingIn} />
      <Stack.Screen name="Signup" component={Signup} />
    </>
  );
};
