import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const duploadPhoto = uploadPhoto(fileName);
  const dSignUpUser = signUpUser(firstName, lastName);

  return Promise.allSettled([duploadPhoto, dSignUpUser]).then((res) => {
    console.log(res);
  });
}
