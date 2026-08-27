export const SignupButton = () => {
  return (
    // Auth0 route handler, not a page: a full navigation is required for the redirect.
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className="button__sign-up" href="/api/auth/signup">
      Sign Up
    </a>
  );
};
