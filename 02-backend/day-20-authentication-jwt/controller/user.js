import { eq } from "drizzle-orm";

import { usersTable } from "../model/user.js";
import { createHmac, randomBytes } from "node:crypto";
import jwt from "jsonwebtoken";
import db from "../db/index.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [existingUser] = await db
      .select({
        id: usersTable.id,
        salt: usersTable.salt,
        password: usersTable.password,
        role: usersTable.role,
      })
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (!existingUser) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const hash = createHmac("sha256", existingUser.salt)
      .update(password)
      .digest("base64");

    if (hash !== existingUser.password) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

    const token = jwt.sign(
      { id: existingUser.id, role: existingUser.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1m",
      },
    );

    return res.status(200).json({
      message: "You are logged in",
      success: true,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const [existingUser] = await db
      .select({
        id: usersTable.id,
      })
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (existingUser) {
      return res.status(400).json({
        message: "Email already taken",
        success: false,
      });
    }

    const salt = randomBytes(256).toString("base64");
    const hash = createHmac("sha256", salt).update(password).digest("base64");

    const [user] = await db
      .insert(usersTable)
      .values({
        name,
        email,
        password: hash,
        salt,
        role
      })
      .returning({ id: usersTable.id, role: usersTable.role });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1m",
      },
    );

    return res.status(200).json({
      message: "You are registered successfully",
      success: true,
      token,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const getUserData = async (req, res) => {
  try {
    const user = req.user;
    console.log(user);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized login again",
        success: false,
      });
    }

    const data = await db
      .select({
        id: usersTable.id,
        name: usersTable.name,
        email: usersTable.email,
      })
      .from(usersTable)
      .where(eq(usersTable.id, user.id));
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
