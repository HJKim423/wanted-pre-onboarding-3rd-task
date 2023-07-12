export function getDateFormat(date) {
  var d = new Date(date);
  return (
    d.getFullYear() +
    "년 " +
    (d.getMonth() + 1 > 9
      ? (d.getMonth() + 1).toString()
      : "0" + (d.getMonth() + 1)) +
    "월 " +
    (d.getDate() > 9 ? d.getDate().toString() : "0" + d.getDate().toString()) +
    "일"
  );
}
