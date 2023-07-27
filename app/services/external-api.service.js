import axios, { isAxiosError } from "axios";

export const callExternalApi = async (options) => {
  try {
    const response = await axios(options.config);
    const { data } = response;

    return {
      data,
      error: null,
      status: response.status,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      const { response } = error;

      const status = response && response.status ? response.status : 500;
      let message = "http request failed";

      if (response && response.statusText) {
        message = response.statusText;
      }

      if (error.message) {
        message = error.message;
      }

      if (response && response.data && response.data.message) {
        message = response.data.message;
      }

      return {
        data: null,
        error: {
          message,
        },
        status: status,
      };
    }

    return {
      data: null,
      error: {
        message: error.message,
      },
      status: 500,
    };
  }
};
