const fetch = require("node-fetch");

export const callApi = async (url, options = {}) => {
  const response = await fetch(url, options);

  const responseBody = await response.json();

  if (response.ok) {
    return { error: null, data: responseBody };
  }

  return {
    error: {
      status: response.status,
      message: responseBody.message,
    },
    data: null,
  };
};
