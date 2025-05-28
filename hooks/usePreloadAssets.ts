import { useState, useEffect } from 'react'

interface UsePreloadAssetsProps {
  images?: string[]
  audio?: string[]
  other?: string[]
  minLoadTime?: number
}

export const usePreloadAssets = ({
  images = [],
  audio = [],
  other = [],
  minLoadTime = 3000
}: UsePreloadAssetsProps) => {
  const [progress, setProgress] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedAssets, setLoadedAssets] = useState<string[]>([])

  useEffect(() => {
    const allAssets = [...images, ...audio, ...other]
    let loadedCount = 0
    const startTime = Date.now()

    const updateProgress = (assetUrl: string) => {
      loadedCount++
      const assetProgress = (loadedCount / allAssets.length) * 100
      
      setLoadedAssets(prev => [...prev, assetUrl])
      setProgress(assetProgress)

      if (loadedCount === allAssets.length) {
        const elapsedTime = Date.now() - startTime
        const remainingTime = Math.max(0, minLoadTime - elapsedTime)
        
        setTimeout(() => {
          setIsLoading(false)
        }, remainingTime)
      }
    }

    // Preload images
    const imagePromises = images.map(src => {
      return new Promise<void>((resolve) => {
        const img = new Image()
        img.onload = () => {
          updateProgress(src)
          resolve()
        }
        img.onerror = () => {
          updateProgress(src)
          resolve()
        }
        img.src = src
      })
    })

    // Preload audio
    const audioPromises = audio.map(src => {
      return new Promise<void>((resolve) => {
        const audioEl = new Audio()
        audioEl.oncanplaythrough = () => {
          updateProgress(src)
          resolve()
        }
        audioEl.onerror = () => {
          updateProgress(src)
          resolve()
        }
        audioEl.src = src
      })
    })

    if (allAssets.length === 0) {
      setTimeout(() => {
        setProgress(100)
        setIsLoading(false)
      }, minLoadTime)
    }

    Promise.all([...imagePromises, ...audioPromises])

  }, [images, audio, other, minLoadTime])

  return { progress, isLoading, loadedAssets }
}
