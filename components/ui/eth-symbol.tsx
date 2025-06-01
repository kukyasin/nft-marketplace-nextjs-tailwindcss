import type React from "react"

interface EthSymbolProps {
  className?: string
}

export const EthSymbol: React.FC<EthSymbolProps> = ({ className }) => {
  return <span className={className}>Ξ</span>
}
