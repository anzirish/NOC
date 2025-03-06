function printMessage(obj) {
  for (let obj of users) {
    let msg =
      obj.role == "admin"
        ? obj.active
          ? "Admin Access Granted!"
          : "Admin Access Revoked"
        : obj.active
        ? "User Access Granted!"
        : "User Access Revoked";

    console.log(msg);
  }
}

let users = [
  {
    name: "Alice",
    role: "admin",
    active: true,
  },
  {
    name: "Akanksha",
    role: "user",
    active: true,
  },
  {
    name: "Neha",
    role: "admin",
    active: false,
  },
];

printMessage(users);
