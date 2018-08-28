export default {
  getDisplayDateFromDateObject: date => {
    const [year, month, day] = date
      .toISOString()
      .substr(0, 10)
      .split('-');
    return `${day}.${month}.${year}`;
  },
};
