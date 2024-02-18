export const calculateEffort = (
  monthlyWorkingHours,
  monthlyIncome,
  itemPrice
) => {
  const effortPerHour = monthlyIncome / monthlyWorkingHours;

  const effortPerMonth = itemPrice / effortPerHour;

  return effortPerMonth;
};
