import http from "./httpService";

const getSkips = () => {
  return http.Get("/skips/by-location", {
    postcode: "NR32",
    area: "Lowestoft",
  });
};

export default { getSkips };
