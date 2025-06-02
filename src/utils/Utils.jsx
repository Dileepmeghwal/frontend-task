const user = {
  name: "Alice",
  age: 24,
  isAdmin: true,
};

console.log(user.name);
console.log(user["age"]);
user.age = 34;
user;

const person = {
  name: "Dileep",
  email: "admin@gmail.com",
  phone: 1214142222,
};
const error = {};

const validate = (data) => {
  const { name, email, phone } = data;
  const hasError = {};
  if (!name) hasError.name = "Please enter name!";
  if (!email) {
    hasError.email = "Please enter email address!";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    hasError.email = "Please enter valid email";
  }
  if (!phone) {
    hasError.phone = "Enter phone";
  } else if (!/^\+?1?\d{10}$/.test(phone)) {
    hasError.phone = "Phone must be a 10-digit number!";
  }

  return hasError;
};

console.log(validate(person));
