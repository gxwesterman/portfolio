const icons = [
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="8 8 32 32" className="w-full h-full">
    <rect width="36" height="36" x="6" y="6" fill="#1976d2"></rect><polygon fill="#fff" points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"></polygon><path fill="#fff" d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"></path>
  </svg>,
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="8 8 32 32" className="w-full h-full">
    <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
  </svg>,
  <svg className="h-full w-full" width="64px" height="64px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 L119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" fill="var(--foreground)"> </path> </g> </g></svg>,
  <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="2 2 46 46">
    <path fill="#283593" fill-rule="evenodd" d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z" clip-rule="evenodd"></path><path fill="#5c6bc0" fill-rule="evenodd" d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z" clip-rule="evenodd"></path><path fill="#3949ab" fill-rule="evenodd" d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z" clip-rule="evenodd"></path>
  </svg>,
  <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="2 2 28 28">
    <path fill="var(--foreground)" d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"></path>
  </svg>
]

export function Carousel() {

  return (
    <div className="flex gap-5 max-w-50 overflow-hidden">
      {icons.map((icon) => 
        <div className="w-9 h-9 min-w-9 min-w-9 rounded-md overflow-hidden">{icon}</div>
      )}
    </div>
  )
}
