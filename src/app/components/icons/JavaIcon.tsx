export default function JavaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      {/* Coffee Cup Body */}
      <path
        d='M24 10H8C6.89543 10 6 10.8954 6 12V24C6 25.1046 6.89543 26 8 26H24C25.1046 26 26 25.1046 26 24V12C26 10.8954 25.1046 10 24 10Z'
        className='fill-current group-hover:fill-[#E76F00] group-focus:fill-[#E76F00]'
      />
      {/* Coffee Cup Handle */}
      <path
        d='M26 15C26 13.8954 26.8954 13 28 13C29.1046 13 30 13.8954 30 15V21C30 22.1046 29.1046 23 28 23C26.8954 23 26 22.1046 26 21V15Z'
        className='fill-current group-hover:fill-[#E76F00] group-focus:fill-[#E76F00]'
      />
      {/* Steam Wisp 1 */}
      <path
        d='M11 7C11 6.44772 11.4477 6 12 6H14C14.5523 6 15 6.44772 15 7V8C15 8.55228 14.5523 9 14 9H12C11.4477 9 11 8.55228 11 8V7Z'
        className='fill-current group-hover:fill-[#C95B00] group-focus:fill-[#C95B00]'
      />
      {/* Steam Wisp 2 */}
      <path
        d='M17 5C17 4.44772 17.4477 4 18 4H20C20.5523 4 21 4.44772 21 5V6C21 6.55228 20.5523 7 20 7H18C17.4477 7 17 6.55228 17 6V5Z'
        className='fill-current group-hover:fill-[#C95B00] group-focus:fill-[#C95B00]'
      />
       {/* Steam Wisp 3 */}
      <path
        d='M23 7C23 6.44772 23.4477 6 24 6H26C26.5523 6 27 6.44772 27 7V8C27 8.55228 26.5523 9 26 9H24C23.4477 9 23 8.55228 23 8V7Z'
        className='fill-current group-hover:fill-[#C95B00] group-focus:fill-[#C95B00]'
      />
    </svg>
  );
}