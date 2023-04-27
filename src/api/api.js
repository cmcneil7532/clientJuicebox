export const getUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};
//Create Users and pus to database
export const createUser = async (userObj) => {
  //pass in username, password, a
  try {
    const response = await fetch("http://localhost:3000/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
