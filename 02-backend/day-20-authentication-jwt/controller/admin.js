import db from "../db/index.js";
import { usersTable } from "../model/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await db.select({id: usersTable.id, name:usersTable.name, email: usersTable.email, role: usersTable.role}).from(usersTable);
    console.log(users);

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
