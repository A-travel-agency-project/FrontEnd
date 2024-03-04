export const productTableDate = (date: string) => {
  const dayOfWeekList = ["월", "화", "수", "목", "금", "토", "일"];
  const dayOfWeek = dayOfWeekList[new Date(date).getDay() - 1];
  const dateArr = date.split("T");
  const ymd = dateArr[0].split("-");
  const hms = dateArr[1].split(":");
  return `${ymd[0]}.${ymd[1]}.${ymd[2]}(${dayOfWeek}) ${hms[0]}:${hms[1]}`;
};
