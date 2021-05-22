export const getPublicMessage = () => {
  return {
    message: "The API doesn't require an access token to share this message.",
  };
};

export const getProtectedMessage = () => {
  return {
    message: "The API successfully validated your access token.",
  };
};

export const getAdminMessage = () => {
  return {
    message: "The API successfully recognized you as an admin.",
  };
};
