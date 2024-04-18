import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className="bg-primary px-32 py-12 text-white hover:cursor-pointer"
        onClick={() => {
          navigate('/app')
        }}
      >
        Go To App
      </div>
    </div>
  )
}
