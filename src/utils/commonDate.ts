export const commonDate = (date: string): string => {
  const dateArr = date.split("-");
  const dateFormat = ["년", "월", "일", "시", "분"];
  let result = "";

  for (let i = 0; i < dateArr.length; i++) {
    result += `${dateArr[i]} ${dateFormat[i]} `;
  }

  return result;
};
