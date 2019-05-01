import types from './types';

export const setUserName = (name) => {
    return {
      type: types.SET_USER_NAME,
      name
    };
  };
  
export default {
    setUserName,
};