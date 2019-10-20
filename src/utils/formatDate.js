const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const monthIndex = date.getMonth();
  const month = months[monthIndex];
  const year = date.getFullYear();
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
};

export default formatDate;
