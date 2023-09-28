import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const duploadPhoto = uploadPhoto(fileName);
  const dSignUpUser = signUpUser(firstName, lastName);

  return Promise.allSettled([duploadPhoto, dSignUpUser]).then((res) => {
    const newList = [];
    for (const item of res) {
      if (item.status === 'rejected') {
        newList.push({
          status: item.status,
          value: item.reason,
        });
      } else {
        newList.push(item);
      }
    }
    return newList;
  });
}
