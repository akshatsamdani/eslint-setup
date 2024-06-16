interface User {
    name: string;
    age: number;
  }

const fetchUsers = async () => {
  const users: User[] = [
    {name: 'John Doe', age: 30},
    {name: 'Jane Doe', age: 25},
  ];

  for (const user in users) {
    console.log(user.name); // Error: 'user' is a string, not a User object. Should use 'of' instead of 'in' for arrays.
  }

  const unusedVariable = 'This variable is declared but never used.'; // Error: 'unusedVariable' is assigned a value but never used.

  users.forEach((user) => {
    if (user.age > 0) user.age = '30'; // Error: Type 'string' is not assignable to type 'number'.
  });

  return users;
};

fetchUsers();
