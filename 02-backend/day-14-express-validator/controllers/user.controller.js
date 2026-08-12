/**
 * error handling
 */

export const registerUser = async (req, res, next) => {
  try {
    throw new Error("Encounter an error while registering new user");
  } catch (error) {
    next(error);
  }
};

// export const loginUser = (req,res,next) => {
//     try {
//         // throw new Error("Unauthorized ! login again");
//         throw new Error("user already exists with this email address");
//     } catch (error) {
//         // error.status = 401;
//         error.status = 409;
//         next(error);
//     }
// }

/**
 * express validator
 */

export const loginUser = (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log({ email, password });
    res.send("user logged in successfully");
  } catch (error) {
    console.log(error);
  }
};
