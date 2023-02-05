import bcrypt from "bcrypt";
import connectionPool from "../database/db";

const db = connectionPool;

const PasswordVerifier = async (req: any, res: any, next: any) => {
  const body = req.body;
  const email = body.email as string;
  const password = body.password as string;

  interface DbResult {
    password: string;
  }
  type DBR = Array<DbResult>;

  // @ts-expect-error
  await db.execute(
    "SELECT password FROM users WHERE email = ?",
    [email],
    (err: Error, results: DBR) => {
      if (err) {
        return next(err);
      } else {
        const hashedPassword = results[0].password;
        bcrypt.compare(password, hashedPassword, (err, results) => {
          if (err) return next(err);
          else if (results) next();
        });
      }
    }
  );
};

export default PasswordVerifier;
