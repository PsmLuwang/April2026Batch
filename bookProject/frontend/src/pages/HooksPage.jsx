import { toast } from 'react-hot-toast'
const HooksPage = () => {

  const handleClick = () => {
    toast.success("Hello World")
  }

  return (
    <div>
      <button onClick={handleClick} className="text-white bg-black p-3 px-10 mx-auto block w-30 mt-60">Click</button>
    </div>
  )
}

export default HooksPage