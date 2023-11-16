type SolutionProps = {
  className: string
}

export function Solution({ className, ...props }: SolutionProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      width={24} 
      height={24} 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.512 17.023l-1.512 -3.023l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-4.45 12.324" />
      <path d="M15 19l2 2l4 -4" />
    </svg>
  )
}