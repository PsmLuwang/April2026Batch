import mongoose from "mongoose";

export default async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://borishnongmaithem92_db_user:UnyK2XeAUQJilkVn@clustera.8qggolv.mongodb.net/?appName=ClusterA"
    );
    console.log("Database Connected Sucessfully");
  } catch (error) {
    console.log("Error connection to MongoDB: ", error.message);
    process.exit(1); // 1 is failure, 0 status code is success
  }
}