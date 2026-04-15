export const getTimelineData = () => {
  const storedData = localStorage.getItem("timelineData");

  if (storedData) {
    return JSON.parse(storedData);
  }

  return [];
};

export const saveTimelineData = (data) => {
  localStorage.setItem("timelineData", JSON.stringify(data));
};