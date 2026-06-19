/**
 * useAutoSlide
 * Cycles through `count` slides automatically every `intervalMs`.
 * Returns [currentIndex, setCurrentIndex] so the caller can also
 * control the slide manually (e.g. dot/arrow clicks).
 */
import { useState, useEffect, useRef } from 'react'

export default function useAutoSlide(count, intervalMs = 5000) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(
      () => setCurrent(c => (c + 1) % count),
      intervalMs,
    )
  }

  useEffect(() => {
    resetTimer()
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, intervalMs])

  // Wraps setCurrent so that clicking a dot also resets the auto-timer
  const goTo = (index) => {
    setCurrent(index)
    resetTimer()
  }

  return [current, goTo]
}
