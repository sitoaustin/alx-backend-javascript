class ClassRoom {
    constructor(maxStudentsSize) {
      this._maxStudentsSize = maxStudentsSize;
    }
  }

  function initializeRooms(){
const myClassRoom1 = new ClassRoom(19)
const myClassRoom2 = new ClassRoom(20)
const myClassRoom3 = new ClassRoom(34)


    return [
      myClassRoom1,
      myClassRoom2,
      myClassRoom3,

    ]
}

const myClassRoom = new ClassRoom(10)
console.log(myClassRoom._maxStudentsSize);
console.log(initializeRooms())

// [
//   ClassRoom { _maxStudentsSize: 19 },
//   ClassRoom { _maxStudentsSize: 20 },
//   ClassRoom { _maxStudentsSize: 34 }
// ]