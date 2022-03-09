const baseApiUrl =
  process.env.NODE_ENV === "production"
    ? "https://mauros-portfolio-backend.herokuapp.com"
    : "https://mauros-portfolio-backend.herokuapp.com";

/*  https://mauros-portfolio-backend.herokuapp.com/' */

export default baseApiUrl;
