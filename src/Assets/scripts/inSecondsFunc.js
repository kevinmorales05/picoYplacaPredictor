export default function getSeconds(hour) {
  let s = hour.split(":");
  const inSeconds =
    parseInt(s[0]) * 3600 + parseInt(s[1]) * 60 + parseInt(s[2]);
  return inSeconds;
}
