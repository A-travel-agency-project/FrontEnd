export const commonDate = (date: string | number): string => {
  const dateArr = date.toString().split("-");
  const dateFormat = ["년", "월", "일", "시", "분"];
  let result = "";

  for (let i = 0; i < dateArr.length; i++) {
    result += `${dateArr[i]} ${dateFormat[i]} `;
  }

  return result;
};
