function now() {
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let seconds = today.getSeconds();
  return `${year}년 ${two(month)}월 ${two(day)}일 ${two(hour)}:${two(minute)}:${two(seconds)}`
}
function two(num) {
  return (num > 10) ? num : "0" + num;
}