const JackLogo = ({size}) => {
    const color = "var(--text-primary)"
    const bgColor = "var(--background)"
    return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width={size} 
          zoomAndPan="magnify" 
          viewBox="0 0 48 48" 
          height={size}
          preserveAspectRatio="xMidYMid meet" 
          version="1.0">
          <defs>
            <clipPath id="473c4230a8">
              <path 
              d="M 0.488281 0 L 47.507812 0 L 47.507812 47.019531 L 0.488281 47.019531 Z M 0.488281 0 " 
              clipRule="nonzero"/>
            </clipPath>
            <clipPath id="6321228d95">
              <path d="M 0.488281 7 L 47.507812 7 L 47.507812 47.019531 L 0.488281 47.019531 Z M 0.488281 7 " 
              clipRule="nonzero"/>
            </clipPath>
          </defs>
          <g clipPath="url(#473c4230a8)">
            <path fill={bgColor} d="M 0.488281 0 L 47.511719 0 L 47.511719 47.019531 L 0.488281 47.019531 Z M 0.488281 0 " fillOpacity="1" fillRule="nonzero"/>
            <path fill={color} d="M 0.488281 0 L 47.511719 0 L 47.511719 47.019531 L 0.488281 47.019531 Z M 0.488281 0 " fillOpacity="1" fillRule="nonzero"/>
          </g>
          <g clipPath="url(#6321228d95)">
            <path 
            strokeLinecap="butt" 
            transform="matrix(0.734694, 0.000384737, -0.000384737, 0.734694, 15.919672, 34.175689)" 
            fill="none" strokeLinejoin="miter" d="M -0.000486732 3.498607 L 21.995285 3.497722 " 
            stroke={bgColor} strokeWidth="7" strokeOpacity="1" strokeMiterlimit="4"/>
          </g>
          <g fill={bgColor} fillOpacity="1">
            <g transform="translate(17.119412, 29.725707)">
              <g>
                <path d="M 6.703125 0.421875 C 5.160156 0.421875 3.753906 0.15625 2.484375 -0.375 C 1.222656 -0.90625 0.195312 -1.671875 -0.59375 -2.671875 L 2.640625 -6.515625 C 3.765625 -5.054688 4.976562 -4.328125 6.28125 -4.328125 C 7.132812 -4.328125 7.785156 -4.585938 8.234375 -5.109375 C 8.691406 -5.628906 8.921875 -6.390625 8.921875 -7.390625 L 8.921875 -16.421875 L 1.65625 -16.421875 L 1.65625 -21.015625 L 14.8125 -21.015625 L 14.8125 -7.75 C 14.8125 -5.019531 14.125 -2.972656 12.75 -1.609375 C 11.375 -0.253906 9.359375 0.421875 6.703125 0.421875 Z M 6.703125 0.421875 "/>
              </g>
            </g>
          </g>
        </svg>
    );
  }
  
  export default JackLogo;
  