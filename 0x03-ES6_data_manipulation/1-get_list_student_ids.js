export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  const newArray = [];
  arr.map((data) => newArray.push(data.id));
  return newArray;
}
