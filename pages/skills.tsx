import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Skills() {
  const router = useRouter()
  
  useEffect(() => {
    router.replace('/')
  }, [router])

  return <div>Redirecting...</div>
}
