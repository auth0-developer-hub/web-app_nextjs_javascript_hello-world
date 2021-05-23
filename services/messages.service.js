export const getPublicMessage = () => {
  return {
    message: "The API doesn't require authentication to share this message.",
  };
};

export const getProtectedMessage = () => {
  return {
    message: "The API successfully recognized you as an authenticated user.",
  };
};

export const getAdminMessage = () => {
  return {
    message: "The API successfully recognized you as an admin.",
  };
};
