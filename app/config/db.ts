import "reflect-metadata";
import { Connection, createConnection } from "typeorm";
import { Contact } from "~/models/Contact";

declare global {
  var __db: Connection | undefined;
}

const connectToDB = async () =>
  await createConnection({
    type: "sqlite",
    entities: [Contact],
    synchronize: true,
    database: "database/db.sqlite",
  });

export default async () => {
  let connection: Connection;

  if (process.env.NODE_ENV === "production") {
    connection = await connectToDB();
  } else {
    if (!global.__db) {
      global.__db = await connectToDB();
    }
    connection = global.__db;
  }

  return connection;
};
