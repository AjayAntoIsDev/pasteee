const emailRegex = /^([\w%+-]+\.)*[\w%+-]+@([A-Z0-9-]+\.)+[A-Z0-9-]{2,}$/i;
const passwordLength = 8;
const nameLength = 50;
const usernameLength = 50;
function validateEmail(email) {
  if (emailRegex.test(email?.toString())) {
    return true;
  } else {
    throw new Error("Invalid email address");
  }
}
function validatePassword(password) {
  if (password.toString().length >= passwordLength) {
    return true;
  } else {
    throw new Error(
      `Password must be at least ${passwordLength} characters long`
    );
  }
}
function validateName(name) {
  if (name.toString().length <= nameLength) {
    return true;
  } else {
    throw new Error(`Name is too long`);
  }
}
function validateUsername(username) {
  if (username.toString().length <= usernameLength) {
    return true;
  } else {
    throw new Error(`Username is too long`);
  }
}

export { validatePassword as a, validateName as b, validateUsername as c, validateEmail as v };
//# sourceMappingURL=validate-CYZ3z0t9.js.map
