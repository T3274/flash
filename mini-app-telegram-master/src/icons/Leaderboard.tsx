import { IconProps } from '../interfaces/Icon.type'

export const Leaderboard: React.FC<IconProps> = ({
  size = 24,
  className = '',
}) => {
  const svgSize = `${size}px`
  return (
    <svg
      fill="currentColor"
      width={svgSize}
      height={svgSize}
      className={className}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5,12h-4a.5.5,0,0,0-.5.5V20H7V12.5A.5.5,0,0,0,6.5,12Z" />
      <path d="M14,4H10a.5.5,0,0,0-.5.5V20h5V4.5A.5.5,0,0,0,14,4Z" />
      <path d="M21.5,8h-4a.5.5,0,0,0-.5.5V20h5V8.5A.5.5,0,0,0,21.5,8Z" />
    </svg>
  )
}
