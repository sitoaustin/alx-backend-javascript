import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const myClassRoom1 = new ClassRoom(19);
  const myClassRoom2 = new ClassRoom(20);
  const myClassRoom3 = new ClassRoom(34);

  return [
    myClassRoom1,
    myClassRoom2,
    myClassRoom3,

  ];
}
