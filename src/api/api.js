const BASE_URL = "https://cmcneil-juicebox.onrender.com/api";

export const getUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
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
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
//Login an existing user
export const loginUser = async (userObj) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
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
    throw error;
  }
};
