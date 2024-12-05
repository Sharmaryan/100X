import { cookies } from "next/headers"

const page = async() => {
  const cookieStore =  await cookies()
  cookieStore.get('theme')

  return (
    <h1>About Page {new Date().toLocaleTimeString()}</h1>
  )
}

export default page