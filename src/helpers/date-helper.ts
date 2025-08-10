export const correctTime = (date: string) => {
  const hours = new Date(date).toLocaleTimeString().substr(0, 2);
  const minutes = new Date(date).toLocaleTimeString().substr(3, 2);
  const suffix = +hours >= 12 ? "pm" : "am";
  return (+hours > 12 ? +hours - 12 : hours) + ":" + minutes + " " + suffix;
};

export const correctDateFormat = (date: string) => {
  const correctDate = new Date(date).toLocaleDateString().replace(/\./g, "/");
  return (
    correctDate.substring(0, correctDate.length - 4) +
    correctDate.substring(correctDate.length - 2)
  );
};
