type ButtonProps = {
  children?: React.ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return (
  <button 
    className="h-8 items-center justify-center rounded-md bg-black px-3 py-1 text-sm text-white"
    {...props}
  >
    {children}
  </button>
  )
}