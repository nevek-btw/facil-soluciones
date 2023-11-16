type EfficiencyProps = {
  className: string
}

export function Efficiency({ className, ...props}: EfficiencyProps) {
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
      <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11" />
      <path d="M9 7l4 0" />
      <path d="M9 11l4 0" />
    </svg>
  )
}