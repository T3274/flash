import { IconProps } from '../interfaces/Icon.type'

export const Hourglass: React.FC<IconProps> = ({
  size = 24,
  className = '',
}) => {
  const svgSize = `${size}px`

  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 0 24"
      xmlns="http://www.w3.org/2000/svg">
      <title>hourglass</title>

      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M40,42H38V34.5a7.9,7.9,0,0,0-2.3-5.7L30.8,24l4.9-4.8A7.9,7.9,0,0,0,38,13.5V6h2a2,2,0,0,0,0-4H8A2,2,0,0,0,8,6h2v7.5a7.9,7.9,0,0,0,2.3,5.7L17.2,24l-4.9,4.8A7.9,7.9,0,0,0,10,34.5V42H8a2,2,0,0,0,0,4H40a2,2,0,0,0,0-4ZM15.2,31.7l6.2-6.3a1.9,1.9,0,0,0,0-2.8l-6.2-6.3A3.6,3.6,0,0,1,14,13.5V6H34v7.5a3.6,3.6,0,0,1-1.2,2.8l-6.2,6.3a1.9,1.9,0,0,0,0,2.8l6.2,6.3A3.6,3.6,0,0,1,34,34.5v6.3l-7.2-7.3a3.9,3.9,0,0,0-5.6,0L14,40.8V34.5A3.6,3.6,0,0,1,15.2,31.7ZM29.6,42H18.4L24,36.3Z"
      />
    </svg>
  )
}
