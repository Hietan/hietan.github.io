const formatYearMonth = (year: number, month: number) =>
  `${year}-${month.toString().padStart(2, "0")}`;

export default formatYearMonth;
