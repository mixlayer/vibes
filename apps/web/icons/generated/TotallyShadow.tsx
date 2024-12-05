import * as React from 'react';
import type { SVGProps } from 'react';

const SvgTotallyShadow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={340} height={172} fill="none" {...props}>
    <mask
      id="totally-shadow_svg__a"
      width={335}
      height={169}
      x={0}
      y={3}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path
        fill="#fff"
        stroke="#07090D"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M209.846 16.302a1 1 0 0 0 .996 1.08l113.324.079a9.668 9.668 0 0 1 6.195 17.082l-40.899 34.205a1 1 0 0 0-.017 1.52q.398.348.76.743a9.67 9.67 0 0 1 2.531 6.952l-1.235 28.284a9.8 9.8 0 0 1-.27 1.894 1 1 0 0 0-.026.319q.048.597.022 1.201l-.516 11.811c-.232 5.333-4.745 9.468-10.079 9.235l-11.997-.523a9.65 9.65 0 0 1-7.425-4.012 1 1 0 0 0-1.569-.068 9.65 9.65 0 0 1-7.747 3.349l-11.811-.516a9.66 9.66 0 0 1-7.266-3.798 1.001 1.001 0 0 0-1.535-.067 9.665 9.665 0 0 1-7.57 3.15l-4.71-.205a1 1 0 0 0-.685.232l-48.004 40.147a9.67 9.67 0 0 1-12.571-.144l-54.202-47.48a1 1 0 0 0-1.104-.144c-4.355 2.161-9.365 3.074-14.66 2.843-5.845-.256-11.381-1.866-15.999-5.209a24.6 24.6 0 0 1-2.992-2.551 1 1 0 0 0-1.587.23 9.66 9.66 0 0 1-8.924 5.058l-11.81-.516c-5.334-.232-9.47-4.745-9.236-10.079l.96-21.992a1 1 0 0 0-.907-1.039 9.667 9.667 0 0 1-8.76-10.047l.474-10.878a9.63 9.63 0 0 1 3.156-6.732 1 1 0 0 0-.014-1.492L4.691 34.182a9.667 9.667 0 0 1 6.376-16.938l100.675.07c.337 0 .65-.169.836-.45 3.892-5.898 10.369-10.536 19.026-11.024q.018 0 .035-.003c2.153-.197 4.087.21 5.743 1.021a1 1 0 0 0 .919-.02c5.723-3.122 13.531-4.032 19.683 1.816l.001.001a16.1 16.1 0 0 1 4.21 6.542 1 1 0 0 0 1.672.364c.348-.367.787-.815 1.29-1.275 4.474-4.1 11.334-3.897 15.614.399q.114.114.223.23a1 1 0 0 0 1.45.004c3.39-3.547 6.729-6.667 9.58-8.69q.219-.156.446-.299c4.746-2.989 10.224-1.866 13.578 1.075 2.497 2.19 4.09 5.664 3.798 9.297Z"
      />
    </mask>
    <g stroke="#000" strokeWidth={1.5} mask="url(#totally-shadow_svg__a)">
      <path d="m1.786-125.756-431.643 343.344M6.753-125.19l-431.642 343.344M11.721-124.624-419.92 218.72M16.69-124.058l-431.643 343.344M21.657-123.492l-431.642 343.344M26.625-122.926l-431.642 343.344M31.593-122.36-400.05 220.984M36.56-121.794-395.081 221.55M41.529-121.228l-431.643 343.344M46.496-120.662l-431.642 343.344M51.464-120.096l-431.642 343.344M56.432-119.53-375.21 223.814M61.4-118.964-370.242 224.38M66.368-118.398l-431.642 343.344M71.336-117.832l-431.643 343.344M76.304-117.266-355.34 226.078M81.271-116.7-350.37 226.644M86.24-116.134-345.404 227.21M91.207-115.568l-431.642 343.344M96.175-115.002l-431.642 343.344M101.143-114.436l-431.642 343.344M106.111-113.87l-431.643 343.344M111.078-113.304-320.564 230.04M116.046-112.738l-431.642 343.344M121.014-112.172l-431.642 343.344M125.982-111.606-305.66 231.738M130.95-111.04l-431.642 343.344M135.918-110.474-295.725 232.87M140.886-109.908l-431.643 343.344M145.854-109.342l-431.643 343.344M150.821-108.776l-431.642 343.344M155.789-108.21l-431.642 343.344M160.757-107.644-270.885 235.7M165.725-107.077l-431.642 343.343M170.693-106.511l-431.642 343.343M175.661-105.945l-431.643 343.343M180.629-105.379l-431.643 343.343M185.596-104.813-246.046 238.53M190.564-104.247l-431.642 343.343M195.532-103.681-236.11 239.662M200.5-103.115l-431.642 343.343M205.468-102.549l-431.642 343.343M210.436-101.983-221.207 241.36M215.404-101.417l-431.643 343.343M220.371-100.851l-431.642 343.343M225.339-100.285l-431.642 343.343M230.307-99.72l-431.642 343.345M235.275-99.153-196.367 244.19M240.243-98.587l-431.642 343.344M245.211-98.021l-431.643 343.344M250.179-97.455l-431.643 343.344M255.146-96.89l-431.642 343.345M260.114-96.323-171.528 247.02M265.082-95.757-166.56 247.587M270.05-95.191l-431.642 343.344M275.018-94.625l-431.642 343.344M279.986-94.06l-431.643 343.345M284.954-93.493-146.689 249.85M289.921-92.927l-431.642 343.344M294.889-92.361l-431.642 343.344M299.857-91.795l-431.642 343.344M304.825-91.229l-431.642 343.344M309.793-90.663l-431.642 343.344M314.761-90.097l-431.643 343.344M319.729-89.531l-431.643 343.344M324.696-88.965l-431.642 343.344M329.664-88.399l-431.642 343.344M334.632-87.833-97.01 255.511M339.6-87.267-92.042 256.077M344.568-86.7-87.074 256.642M349.536-86.135-82.106 257.21M354.504-85.569-77.139 257.775M359.471-85.003-72.171 258.341M364.439-84.437-67.203 258.907M369.407-83.87-62.235 259.472M374.375-83.305-57.267 260.04M379.343-82.739-52.299 260.605M384.311-82.173-47.331 261.171M389.279-81.607-42.364 261.737M394.247-81.04-37.396 262.302M399.214-80.475-32.428 262.87M404.182-79.909-27.46 263.435M409.15-79.343-22.492 264.001M414.118-78.777-17.524 264.567M419.086-78.21-12.557 265.132M424.054-77.645-7.589 265.7M429.022-77.079-2.621 266.265M433.989-76.513 2.347 266.831M438.957-75.947 7.315 267.397M443.925-75.38 12.283 267.962M448.893-74.815 17.251 268.53M453.861-74.249 22.219 269.095M458.829-73.682 27.186 269.66M463.796-73.116 32.154 270.227M468.764-72.55 37.122 270.793M473.732-71.984 42.09 271.359M478.7-71.418 47.058 271.925M483.668-70.852 52.026 272.49M488.636-70.286 56.993 273.057M493.604-69.72 61.961 273.623M498.572-69.154 66.929 274.189M503.539-68.588 71.897 274.755M508.507-68.022 76.865 275.32M513.475-67.456 81.833 275.887M518.443-66.89 86.801 276.453M523.411-66.324 91.769 277.019M528.379-65.758 96.736 277.585M533.347-65.192 101.704 278.15M538.314-64.626 106.672 278.717M543.282-64.06 111.64 279.283M548.25-63.494 116.608 279.85M553.218-62.928 121.576 280.416M558.186-62.362 126.544 280.982M563.154-61.796 131.511 281.548M568.122-61.23 136.479 282.114M573.089-60.664 141.447 282.68M578.057-60.098 146.415 283.246M583.025-59.532 151.383 283.812M587.993-58.966 156.351 284.378M592.961-58.4 161.319 284.944M597.929-57.834 166.286 285.51M602.897-57.268 171.254 286.076M607.864-56.702 176.222 286.642M612.832-56.136 181.19 287.208M617.8-55.57 186.158 287.774M622.768-55.004 191.126 288.34M627.736-54.438 196.094 288.906M632.704-53.872 201.061 289.472M637.672-53.306 206.029 290.038M642.639-52.74 210.997 290.604M647.607-52.174 215.965 291.17M652.575-51.608 220.933 291.736M657.543-51.042 225.901 292.302M662.511-50.476 230.869 292.868M667.479-49.91 235.836 293.434M672.447-49.344 240.804 294M677.414-48.778 245.772 294.566M682.382-48.212 250.74 295.132M687.35-47.646 255.708 295.698M692.318-47.08 260.676 296.264M697.286-46.514 265.644 296.83M702.254-45.948 270.611 297.396M707.222-45.382 275.579 297.962M712.19-44.816 280.547 298.528M717.157-44.25 285.515 299.094M722.125-43.684 290.483 299.66M727.093-43.118 295.451 300.226M732.061-42.552 300.419 300.792M737.029-41.986 305.387 301.358M741.997-41.42 310.354 301.924M746.965-40.854 315.322 302.49M751.932-40.288 320.29 303.056M756.9-39.722 325.258 303.622M761.868-39.156 330.226 304.188M766.836-38.59 335.194 304.754" />
    </g>
  </svg>
);
export default SvgTotallyShadow;
