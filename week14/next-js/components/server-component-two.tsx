import fs from 'fs'
const ServerComponentTwo = () => {
    fs.readFileSync('components/server-component-two.tsx','utf8')
  return (
    <div>ServerComponentTwo</div>
  )
}

export default ServerComponentTwo