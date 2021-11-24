import React from 'react';

import {Home, Quiz} from '../screens/index';

export default Stack => {
  return (
    <>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </>
  );
};
