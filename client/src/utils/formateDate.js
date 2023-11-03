export const formateDate = (date, config) => {
  const defaulOptions = { day: "numeric", month: "short", year: "numeric" };
  const options = config ? config : defaulOptions;

  return new Date(date).toLocaleDateString("end-US", options);
};
