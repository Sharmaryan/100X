const Card = ({children}:{children: React.ReactNode}) => {
  return (
    <div className="border-gray-300 shadow-lg min-h-20 w-fit p-4">{children}</div>
  )
}
export default Card
