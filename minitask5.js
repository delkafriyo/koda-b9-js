const account = {
  keyId: "BC01",
  userName: "Ryouu",
  password: "bc123",
};
let newPassword = { password: "hsdsdg6" };
if (newPassword.password.length >= 5) {
  let newAccount = { ...account, ...newPassword };
  console.log(newAccount);
} else {
  console.log("Password minimum 5 character");
}
