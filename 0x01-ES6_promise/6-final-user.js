import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const duploadPhoto = uploadPhoto(fileName);
  const dSignUpUser = signUpUser(firstName, lastName);

  return Promise.allSettled([duploadPhoto, dSignUpUser]).then((res) => {
    const newList = [];
    res.forEach((element) => {
      if (element.status === 'fulfilled') {
        newList.push({ status: element.status, value: element.value });
      } else {
        newList.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return newList;
  });
}
