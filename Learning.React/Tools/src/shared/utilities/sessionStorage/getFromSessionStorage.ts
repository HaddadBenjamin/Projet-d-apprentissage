const getFromSessionStorage = <T>(key : string, initialState : T) : T => {
  if (typeof window === 'undefined') return initialState;

  try {
    const item = window.sessionStorage.getItem(key);

    return item ? JSON.parse(item) as T : initialState;
  } catch (error) {
    return initialState;
  }
};

export default getFromSessionStorage;
