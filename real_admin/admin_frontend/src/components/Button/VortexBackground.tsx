import { FC } from "react";

interface VortexBackgroundProps {
  color?: "orange" | "primary" | "info" | "success";
  size?: "small" | "middle" | "large";
  className?: string;
}

const fillColor = {
  orange: "#FCC300",
  primary: "#1D2048",
  info: "#303EFC",
  success: "#67c771",
};

export const VortexBackground: FC<VortexBackgroundProps> = ({
  size = "middle",
  color = "primary",
  className,
}) => {
  return size === "middle" || size === "small" ? (
    <svg width="47" viewBox="0 0 47 36" fill="none" className={className}>
      <path d="M10 0H0V7H10V0Z" fill={fillColor[color]} />
      <path d="M21.2597 0H15.2866V5.97312H21.2597V0Z" fill={fillColor[color]} />
      <path
        d="M19.0198 9.70605H15.2866V12.6926H19.0198V9.70605Z"
        fill={fillColor[color]}
      />
      <path
        d="M22.0066 17.9189H16.0334V23.8921H22.0066V17.9189Z"
        fill={fillColor[color]}
      />
      <path
        d="M30.2197 23.8926H24.2466V29.8657H30.2197V23.8926Z"
        fill={fillColor[color]}
      />
      <path
        d="M13.0469 27.625H0.354004V35.838H13.0469V27.625Z"
        fill={fillColor[color]}
      />
      <path
        d="M37.6863 7.46582H34.6997V10.4524H37.6863V7.46582Z"
        fill={fillColor[color]}
      />
      <path
        d="M29.4731 12.6934H26.4866V15.6799H29.4731V12.6934Z"
        fill={fillColor[color]}
      />
      <path
        d="M36.1929 29.1191H33.2063V32.1057H36.1929V29.1191Z"
        fill={fillColor[color]}
      />
      <path
        d="M46.6454 32.1055H44.4055V34.3454H46.6454V32.1055Z"
        fill={fillColor[color]}
      />
      <path
        d="M43.6591 23.8926H41.4192V26.1325H43.6591V23.8926Z"
        fill={fillColor[color]}
      />
      <path
        d="M36.9396 17.9189H34.6997V20.1589H36.9396V17.9189Z"
        fill={fillColor[color]}
      />
      <path
        d="M22.0065 32.1055H19.7666V34.3454H22.0065V32.1055Z"
        fill={fillColor[color]}
      />
      <path
        d="M17.5265 26.8789H15.2866V29.1188H17.5265V26.8789Z"
        fill={fillColor[color]}
      />
      <path
        d="M41.4192 1.49316H38.4326V4.47972H41.4192V1.49316Z"
        fill={fillColor[color]}
      />
      <path
        d="M29.4731 3.7334H27.2332V5.97332H29.4731V3.7334Z"
        fill={fillColor[color]}
      />
    </svg>
  ) : (
    <svg width="62" viewBox="0 0 62 48" fill="none" className={className}>
      <path d="M13 0H3V10H13V0Z" fill={fillColor[color]} />
      <path d="M28 0H20V8H28V0Z" fill={fillColor[color]} />
      <path d="M25 13H20V17H25V13Z" fill={fillColor[color]} />
      <path d="M29 24H21V32H29V24Z" fill={fillColor[color]} />
      <path d="M40 32H32V40H40V32Z" fill={fillColor[color]} />
      <path d="M17 37H0V48H17V37Z" fill={fillColor[color]} />
      <path d="M50 10H46V14H50V10Z" fill={fillColor[color]} />
      <path d="M39 17H35V21H39V17Z" fill={fillColor[color]} />
      <path d="M48 39H44V43H48V39Z" fill={fillColor[color]} />
      <path d="M62 43H59V46H62V43Z" fill={fillColor[color]} />
      <path d="M58 32H55V35H58V32Z" fill={fillColor[color]} />
      <path d="M49 24H46V27H49V24Z" fill={fillColor[color]} />
      <path d="M29 43H26V46H29V43Z" fill={fillColor[color]} />
      <path d="M23 36H20V39H23V36Z" fill={fillColor[color]} />
      <path d="M55 2H51V6H55V2Z" fill={fillColor[color]} />
      <path d="M39 5H36V8H39V5Z" fill={fillColor[color]} />
    </svg>
  );
};
