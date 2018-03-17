export default function init(dispatch) {
  setTimeout(dateTime(), 1000);
}

export function dateTime(){
  return new Date();
}