import fs from 'fs'
const ServerComponentOne = () => {
    fs.readFileSync('components/server-component-one.tsx','utf8')
  return (
    <>
    <div>ServerComponentOne</div>
    </>
  )
}

export default ServerComponentOne