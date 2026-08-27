export const LogoutButton = () => {
  return (
    // Auth0 route handler, not a page: a full navigation is required for the redirect.
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className="button__logout" href="/api/auth/logout">
      Log Out
    </a>
  );
};
