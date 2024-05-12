type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User, newValues: Partial<User>): User {
  return { ...initialValues, ...newValues };
}


