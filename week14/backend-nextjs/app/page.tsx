import client from "@/db";
async function getUserDetails() {
  try {
    const response = await client.user.findFirst();
    return { email: response?.username, name: "aryan" };
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex justify-center">
        <div className="border p-8 rounded">
          <div>Name: {userData?.name}</div>
          <div>Email : {userData?.email}</div>
        </div>
      </div>
    </div>
  );
}
