// connection.ts
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

export const initDb = async () => {
  const connection = await mysql.createConnection(
    process.env.DATABASE_URL ??
      'mysql://root:x824hqn02483glhf08@localhost:3306/syncus_chat_db',
  );
  return drizzle(connection);
};
