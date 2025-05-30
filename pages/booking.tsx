import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Booking() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/')
  }, [router])

  return <div>Redirecting...</div>
}
