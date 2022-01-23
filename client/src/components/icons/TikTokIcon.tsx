import React from "react";
import { IIconProps } from "../../interfaces/IIconProps";
export const TikTokIcon = (props: IIconProps) => {
  const svg = (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 37 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="18.5" cy="18.866" rx="18.5" ry="18.3445" fill={props.fill} />
      <path
        d="M19.2832 0.550769C21.229 0.521484 23.1637 0.538838 25.0961 0.521484C25.2132 2.73519 26.0317 4.99011 27.6976 6.55521C29.3602 8.15936 31.7119 8.89364 34 9.14202V14.9653C31.8557 14.897 29.7014 14.4631 27.7556 13.5651C26.9081 13.192 26.1186 12.7115 25.3459 12.2202C25.3359 16.4458 25.3637 20.6661 25.318 24.8744C25.2021 26.8961 24.5163 28.9081 23.3075 30.574C21.3628 33.3474 17.9875 35.1555 14.5207 35.2119C12.3943 35.3301 10.2701 34.7661 8.45807 33.727C5.45518 32.0047 3.34211 28.8517 3.03435 25.4677C2.99558 24.751 2.98963 24.033 3.0165 23.3158C3.28412 20.5641 4.68354 17.9318 6.85571 16.141C9.3178 14.0553 12.7667 13.0618 15.996 13.6497C16.0261 15.7918 15.938 17.9318 15.938 20.0739C14.4628 19.6097 12.7388 19.7398 11.4498 20.6108C10.5067 21.2151 9.79405 22.1042 9.4215 23.1412C9.11374 23.8744 9.20183 24.6889 9.21967 25.4677C9.57315 27.8408 11.9193 29.8354 14.4237 29.6196C16.0841 29.6022 17.6753 28.6651 18.5406 27.2931C18.8205 26.8126 19.1338 26.3213 19.1505 25.7562C19.2966 23.1694 19.2386 20.5934 19.2565 18.0066C19.2687 12.1768 19.2386 6.36323 19.2843 0.551854L19.2832 0.550769Z"
        fill="black"
      />
    </svg>
  );

  return <>{svg}</>;
};
