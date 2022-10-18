type DayMap = {
  [key: number]: string;
};

const dayMap: DayMap = {
  0: "Sun",
  1: "Mon",
  2: "Tue",
  3: "Wed",
  4: "Thu",
  5: "Fri",
  6: "Sat",
};

export const getDayOfWeek = (day: number): string => dayMap[day];
