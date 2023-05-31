import axios from 'axios';

const api = ({ dispatch }) => next => async action => {
  if (action.type !== "apiRequest") {
    return next(action);
  }
  const {url, method, data, onStart, onSerialize, onSuccess, onError } = action.payload;

  if (onStart) {
    dispatch({ type: onStart });
  }
  try {
    const response = await axios.request({
      url,
      method,
      data
    });
    dispatch({ type: onSuccess, payload: response.data });
  } catch(error) {
    dispatch({ type: onError });
    dispatch({ type: "SHOW_ERROR", payload: { error: error.message }});
  }
}

export default api;