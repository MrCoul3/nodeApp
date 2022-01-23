import React from "react";
import {IIconProps} from "../../interfaces/IIconProps";
export const InstaIcon = (props: IIconProps) => {
  const svg = (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 35 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 13.5709C16.6416 13.5709 15.8025 13.8233 15.0888 14.2962C14.3751 14.769 13.8188 15.4412 13.4904 16.2275C13.1619 17.0139 13.0759 17.8792 13.2434 18.714C13.4109 19.5488 13.8242 20.3156 14.4312 20.9175C15.0381 21.5193 15.8114 21.9292 16.6533 22.0953C17.4952 22.2613 18.3678 22.1761 19.1608 21.8504C19.9539 21.5246 20.6317 20.9731 21.1086 20.2653C21.5855 19.5576 21.84 18.7256 21.84 17.8744C21.84 17.3093 21.7277 16.7497 21.5096 16.2275C21.2915 15.7054 20.9718 15.231 20.5688 14.8314C20.1658 14.4318 19.6874 14.1148 19.1608 13.8985C18.6343 13.6822 18.0699 13.5709 17.5 13.5709ZM34.8775 9.31943C34.8683 7.97936 34.6194 6.65153 34.1425 5.39766C33.7912 4.48014 33.2478 3.64691 32.5479 2.95295C31.8481 2.25899 31.0078 1.72008 30.0825 1.37178C28.818 0.898848 27.4789 0.652084 26.1275 0.642955C23.87 0.521484 23.205 0.521484 17.5 0.521484C11.795 0.521484 11.13 0.521484 8.8725 0.642955C7.52108 0.652084 6.182 0.898848 4.9175 1.37178C3.9922 1.72008 3.15191 2.25899 2.45207 2.95295C1.75223 3.64691 1.20876 4.48014 0.8575 5.39766C0.380562 6.65153 0.131707 7.97936 0.1225 9.31943C-1.17347e-07 11.558 0 12.2174 0 17.8744C0 23.5315 -1.17347e-07 24.1909 0.1225 26.4294C0.141337 27.7742 0.389855 29.1061 0.8575 30.3685C1.2072 31.2819 1.75023 32.1103 2.45 32.798C3.14684 33.4961 3.98893 34.035 4.9175 34.3771C6.182 34.85 7.52108 35.0968 8.8725 35.1059C11.13 35.2274 11.795 35.2274 17.5 35.2274C23.205 35.2274 23.87 35.2274 26.1275 35.1059C27.4789 35.0968 28.818 34.85 30.0825 34.3771C31.0111 34.035 31.8532 33.4961 32.55 32.798C33.2498 32.1103 33.7928 31.2819 34.1425 30.3685C34.619 29.1085 34.8678 27.7751 34.8775 26.4294C35 24.1909 35 23.5315 35 17.8744C35 12.2174 35 11.558 34.8775 9.31943ZM30.4325 23.2018C30.3763 24.2726 30.1459 25.3274 29.75 26.3253C29.4103 27.1577 28.9052 27.9139 28.2649 28.5488C27.6245 29.1838 26.8619 29.6846 26.0225 30.0215C25.0066 30.3921 23.937 30.5972 22.855 30.6288H12.145C11.063 30.5972 9.99335 30.3921 8.9775 30.0215C8.10968 29.7017 7.32598 29.1915 6.685 28.5291C6.05092 27.9066 5.56123 27.1546 5.25 26.3253C4.87472 25.319 4.67356 24.2571 4.655 23.1844V17.8744V12.5644C4.67356 11.4917 4.87472 10.4298 5.25 9.42354C5.57249 8.56302 6.08698 7.78591 6.755 7.15031C7.38558 6.52495 8.14321 6.03988 8.9775 5.72737C9.99335 5.35672 11.063 5.15161 12.145 5.12001H22.855C23.937 5.15161 25.0066 5.35672 26.0225 5.72737C26.8903 6.04715 27.674 6.55731 28.315 7.21972C28.9491 7.84225 29.4388 8.5943 29.75 9.42354C30.1238 10.4309 30.3306 11.4915 30.3625 12.5644V17.8744C30.3625 21.4491 30.485 21.8135 30.4325 23.1844V23.2018ZM27.6325 10.2912C27.4241 9.73066 27.0956 9.22163 26.6696 8.79921C26.2436 8.37679 25.7303 8.05103 25.165 7.84443C24.3888 7.57764 23.5714 7.44842 22.75 7.46266H12.25C11.4245 7.47066 10.6069 7.62341 9.835 7.91384C9.27838 8.11106 8.77046 8.42351 8.34502 8.83042C7.91958 9.23733 7.58636 9.72937 7.3675 10.2738C7.11336 11.0467 6.9892 11.8557 7 12.6685V23.0803C7.01735 23.898 7.1711 24.7071 7.455 25.475C7.66336 26.0355 7.99187 26.5446 8.41787 26.967C8.84387 27.3894 9.35722 27.7152 9.9225 27.9218C10.6692 28.1941 11.4549 28.3464 12.25 28.373H22.75C23.5755 28.365 24.3931 28.2122 25.165 27.9218C25.7303 27.7152 26.2436 27.3894 26.6696 26.967C27.0956 26.5446 27.4241 26.0355 27.6325 25.475C27.9254 24.7096 28.0794 23.8989 28.0875 23.0803V17.8744V12.6685C28.088 11.8491 27.9337 11.0369 27.6325 10.2738V10.2912ZM17.5 24.5032C16.6229 24.5033 15.7545 24.3317 14.9444 23.9983C14.1343 23.665 13.3985 23.1764 12.7792 22.5607C12.1598 21.9449 11.669 21.214 11.335 20.4099C11.001 19.6057 10.8302 18.7441 10.8325 17.8744C10.8325 16.5626 11.225 15.2803 11.9604 14.1899C12.6957 13.0994 13.7408 12.2498 14.9633 11.7485C16.1859 11.2473 17.5309 11.1171 18.8281 11.3743C20.1254 11.6315 21.3165 12.2645 22.2507 13.1933C23.1849 14.1221 23.8202 15.3049 24.0762 16.5919C24.3321 17.8789 24.1973 19.2123 23.6886 20.4232C23.1799 21.6342 22.3204 22.6682 21.2187 23.3945C20.1171 24.1208 18.8229 24.5067 17.5 24.5032ZM24.5 12.5471C24.1131 12.5065 23.7551 12.3253 23.4949 12.0386C23.2348 11.7518 23.0908 11.3797 23.0908 10.994C23.0908 10.6082 23.2348 10.2361 23.4949 9.94939C23.7551 9.66263 24.1131 9.4815 24.5 9.4409C24.8869 9.4815 25.2449 9.66263 25.5051 9.94939C25.7652 10.2361 25.9092 10.6082 25.9092 10.994C25.9092 11.3797 25.7652 11.7518 25.5051 12.0386C25.2449 12.3253 24.8869 12.5065 24.5 12.5471Z"
        fill={props.fill}
      />
    </svg>
  );

  return <>{svg}</>;
};