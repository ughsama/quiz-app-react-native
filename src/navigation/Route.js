import React from 'react';
import {Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStack from './MainStack';
import AuthStack from './AuthStack';

export const AuthContext = React.createContext();

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            user: {
              quizzesTaken: 0,
              totalScore: 0,
              rightAnswers: 0,
              email: action.email,
              fullName: action.email,
            },
            userToken: action.token,
          };
        case 'SIGN_UP':
          return {
            ...prevState,
            isSignout: false,
            userToken: 'token',
            user: {
              quizzesTaken: 0,
              totalScore: 0,
              rightAnswers: 0,
              email: action.email,
              password: action.password,
              fullName: action.name,
            },
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
        case 'UPDATE_SCORE':
          return {
            ...prevState,
            user: {
              ...prevState.user,
              quizzesTaken: action.quizzesTaken,
              totalScore: action.totalScore,
              rightAnswers: action.rightAnswers,
            },
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      user: {
        email: null,
        password: null,
        fullName: null,
        quizzesTaken: 0,
        totalScore: 0,
        rightAnswers: 0,
      },
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // userToken = await SecureStore.getItemAsync('userToken');
        userToken = false;
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    // async storage if i later feel like it
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        if (data.email === 'admin' && data.password === 'admin') {
          dispatch({
            type: 'SIGN_IN',
            token: 'dummy-auth-token',
            email: data.email,
            fullName: data.email,
          });
        } else {
          Alert.alert('Login failed!');
        }
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        dispatch({
          type: 'SIGN_UP',
          token: 'dummy-auth-token',
          email: data.email,
          password: data.password,
          name: data.fullName,
        });
      },
      returnUser: () => {
        return state.user;
      },
      updateScore: data => {
        dispatch({
          type: 'UPDATE_SCORE',
          quizzesTaken: data.quizzesTaken,
          totalScore: data.totalScore,
          rightAnswers: data.rightAnswers,
        });
      },
    }),
    [state],
  );

  return (
    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <Stack.Navigator
          name="Root"
          screenOptions={{
            headerShown: false,
          }}>
          {state.userToken == null ? AuthStack(Stack) : MainStack(Stack)}
        </Stack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>
  );
};

export default Routes;
