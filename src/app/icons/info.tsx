type InfoProps = {
  className: string
}

export function InfoIcon({ className, ...props }: InfoProps) {
  return (
    <svg 
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
      <path d="M12 9h.01" />
      <path d="M11 12h1v4h1" />
      <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
    </svg>
  )
}