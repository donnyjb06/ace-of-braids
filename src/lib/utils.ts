type viewportAmount = "some" | "all" | number

export const slideIn = (initialX: number = -20, duration: number = 0.7, amount: viewportAmount = "some") => {
  if (typeof amount === 'number' && (amount < 0 || amount > 1)) {
    console.error(`viewportAmount of ${amount} is invalid. viewportAmount must be between 0 and 1!`)
    throw new Error(`viewportAmount of ${amount} is invalid. viewportAmount must be between 0 and 1!`)
  }

  return {
    initial: { opacity: 0, x: initialX },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: amount },
    transition: { ease: 'easeOut', duration: duration },
  }
}
