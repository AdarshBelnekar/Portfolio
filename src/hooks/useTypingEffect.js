// hooks/useTypingEffect.js
// Cycles through an array of strings with a typewriter + erase animation.

import { useState, useEffect } from 'react'

export function useTypingEffect(words, typingSpeed = 80, erasingSpeed = 50, pause = 1800) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const current = words[wordIndex]

    if (isTyping) {
      // Still typing the current word
      if (text.length < current.length) {
        const timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing → pause, then start erasing
        const timeout = setTimeout(() => setIsTyping(false), pause)
        return () => clearTimeout(timeout)
      }
    } else {
      // Erasing
      if (text.length > 0) {
        const timeout = setTimeout(() => setText(text.slice(0, -1)), erasingSpeed)
        return () => clearTimeout(timeout)
      } else {
        // Done erasing → move to next word
        setIsTyping(true)
        setWordIndex((i) => (i + 1) % words.length)
      }
    }
  }, [text, isTyping, wordIndex, words, typingSpeed, erasingSpeed, pause])

  return text
}
