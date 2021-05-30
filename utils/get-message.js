import { callApi } from "./call-api";

export const getMessage = async (type, options) => {
  /**
   * To call the /api/messages/admin endpoint, you need to log in
   * as a user that has the messages-admin role, which in turn
   * has the read:admin-messages permission.
   * If you need help doing so, check out the following resources.
   * Create roles:
   * https://auth0.com/docs/authorization/rbac/roles/create-roles
   * Create permissions:
   * https://auth0.com/docs/get-started/dashboard/add-api-permissions
   * Add permissions to roles:
   * https://auth0.com/docs/authorization/rbac/roles/add-permissions-to-roles
   * Assign roles to users:
   * https://auth0.com/docs/users/assign-roles-to-users
   */

  const apiServerUrl = process.env.API_SERVER_URL;
  const resourceUrl = `${apiServerUrl}/api/messages/${type}`;

  try {
    const { error, data } = await callApi(resourceUrl, options);

    if (data) {
      return data.message;
    }

    if (error) {
      return `Error ${error.status}: ${error.message}`;
    }

    return "Unable to retrieve messages.";
  } catch (error) {
    return error.message || error;
  }
};
