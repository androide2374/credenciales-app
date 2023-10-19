import { type SeccionesData } from '@/constance/secciones'
import React, { type ReactElement } from 'react'

export type SeccionesType = keyof typeof SeccionesData

type SvgSeccionesType = {
  [key in SeccionesType]: (
    color: string,
    onClick: () => void,
    selected: boolean,
    key: any
  ) => ReactElement;
}
const SvgSecciones: SvgSeccionesType = {
  '583E': (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)', zIndex: '0' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 26.135 171.562 L 101.605 284.478 L 143.146 261.074 L 109.036 211.551 L 72.947 182.113 L 63.121 190.168 L 47.706 184.319 L 45.407 177.094 L 40.207 176.135 L 37.501 175.081 L 34.654 173.133 L 32.439 171.855 L 28.787 171.518 L 26.135 171.562 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre'
        }}
        transform="translate(-7.542 4.77)"
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.3px"
        fontWeight={700}
      >
        <tspan x={72.794} y={216.14} dx={14.423} dy={15.339}>
          {'583E'}
        </tspan>
        <tspan x={72.794} dy="1em">
          {'\u200B'}
        </tspan>
      </text>
    </React.Fragment>
  ),
  '583D': (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 134.298 247.191 L 109.909 211.713 L 73.683 181.49 L 79.68 174.972 L 105.631 147.717 L 110.815 149.257 L 112.701 157.169 L 117.396 160.155 L 120.828 163.425 L 119.314 166.314 L 116.472 168.212 L 115.841 170.034 L 135.265 194.528 L 134.796 198.482 L 157.786 234.083 L 134.298 247.191 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '111.683px 203.192px'
        }}
        x={100.02}
        y={200.403}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'583D'}
      </text>
    </React.Fragment>
  ),
  '583B': (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 134.125 116.411 L 106.479 147.138 L 111.338 148.626 L 113.206 156.449 L 117.627 159.426 L 121.726 163.197 L 120.036 166.767 L 117.331 168.642 L 116.997 169.991 L 136.228 194.285 L 135.557 198.364 L 180.697 173.434 L 178.178 169.549 L 149.864 129.659 L 134.125 116.411 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '140.57px 163.116px'
        }}
        x={128.907}
        y={160.327}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'583B'}
      </text>
    </React.Fragment>
  ),
  '583A': (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 179.155 169.866 L 151.04 129.186 L 135.202 115.625 L 172.579 66.763 L 224.753 142.402 L 179.155 169.866 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '182.074px 132.025px'
        }}
        x={170.411}
        y={129.236}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'583A'}
      </text>
    </React.Fragment>
  ),
  583: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 225.102 143.13 L 264.48 199.974 L 253.638 204.947 L 246.968 257.191 L 226.505 254.388 L 195.448 213.191 L 204.758 207.774 L 179.699 170.619 L 225.102 143.13 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '221.637px 195.519px'
        }}
        x={209.974}
        y={192.731}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'583'}
      </text>
    </React.Fragment>
  ),
  584: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 315.638 209.467 L 265.308 200.471 L 254.297 205.364 L 249.466 242.92 L 311.559 252.578 L 315.638 209.467 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '280.162px 233.617px'
        }}
        x={268.499}
        y={230.829}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'584'}
      </text>
    </React.Fragment>
  ),
  585: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 316.664 209.684 L 353.844 217.645 L 348.474 230.987 L 347.093 241.893 L 352.895 250.838 L 341.337 257.677 L 312.29 252.755 L 316.664 209.684 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '333.43px 241.124px'
        }}
        x={321.767}
        y={238.336}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'585'}
      </text>
    </React.Fragment>
  ),
  586: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 243.874 271.89 L 246.026 257.86 L 247.875 257.978 L 249.391 244 L 311.474 253.448 L 308.936 281.969 L 243.874 271.89 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '281.078px 269.53px'
        }}
        x={269.415}
        y={266.742}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'586'}
      </text>
    </React.Fragment>
  ),
  588: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 353.195 251.597 L 341.358 258.551 L 312.329 253.698 L 309.583 282.269 L 308.306 303.844 L 366.026 270.346 L 353.195 251.597 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '331.916px 278.384px'
        }}
        x={320.253}
        y={275.596}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'588'}
      </text>
    </React.Fragment>
  ),
  587: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 134.866 247.962 L 204.633 351.842 C 204.633 351.842 207.609 356.831 215.645 355.848 C 223.681 354.865 307.427 304.407 307.427 304.407 L 308.786 282.75 L 243.373 272.696 L 245.267 257.901 L 226.18 255.056 L 194.753 213.463 C 194.753 213.463 134.933 247.991 134.866 247.962 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '207.955px 285.052px'
        }}
        x={196.292}
        y={282.264}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'587'}
      </text>
    </React.Fragment>
  ),
  '593A': (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 143.42 262.104 L 102.146 285.059 L 167.399 381.106 L 182.011 399.737 L 191.959 415.513 L 191.516 417.79 C 191.516 417.79 193.613 419.871 193.613 419.883 C 193.613 419.895 194.893 418.83 194.893 418.83 L 196.046 416.973 L 260.784 380.999 L 236.627 346.829 L 216.017 356.816 C 216.017 356.816 207.579 357.803 203.953 352.442 C 200.327 347.081 143.582 262.264 143.42 262.104 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '165.825px 338.245px'
        }}
        x={154.162}
        y={335.457}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'593A'}
      </text>
    </React.Fragment>
  ),
  593: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 287.342 416.956 C 287.342 416.956 280.456 406.075 280.456 406.063 C 280.456 406.051 277.997 405.721 277.997 405.721 L 261.436 381.841 L 196.654 417.645 L 194.613 420.191 L 218.07 454.734 L 287.342 416.956 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '237.722px 424.219px'
        }}
        x={226.059}
        y={421.431}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'593'}
      </text>
    </React.Fragment>
  ),
  592: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 245.53 358.265 L 271.742 359.83 L 314.482 369.935 L 315.028 374.654 L 274.063 398.743 L 245.53 358.265 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '283.153px 384.768px'
        }}
        x={271.49}
        y={381.98}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'592'}
      </text>
    </React.Fragment>
  ),
  591: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 308.118 304.842 L 237.309 346.189 L 245.1 357.52 L 271.971 359.115 L 314.298 369.05 L 308.118 304.842 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '285.79px 348.522px'
        }}
        x={274.127}
        y={345.734}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'591'}
      </text>
    </React.Fragment>
  ),
  590: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 315.834 374.393 L 308.837 304.656 L 366.53 271.05 L 385.965 299.994 L 395.004 305.9 L 405.202 322.023 L 315.834 374.393 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '347.621px 329.469px'
        }}
        x={335.958}
        y={326.681}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'590'}
      </text>
    </React.Fragment>
  ),
  '590A': (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 449.918 223.898 L 366.867 270.561 L 386.544 299.392 L 395.774 305.454 L 405.874 321.711 L 414.429 316.63 L 407.895 306.883 C 407.895 306.883 406.685 305.021 406.668 305.004 C 406.651 304.987 469.361 269.466 469.361 269.466 L 474.409 264.884 L 449.918 223.898 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '422.243px 278.963px'
        }}
        x={410.58}
        y={276.175}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'590A'}
      </text>
    </React.Fragment>
  ),
  589: (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 354.96 217.932 L 369.617 231.047 L 378.339 225.988 L 392.233 239.204 L 420.568 222.478 L 444.466 221.637 L 446.973 219.961 L 448.85 223.501 L 366.723 269.476 L 353.812 251.672 L 347.513 241.841 L 348.752 231.217 L 354.96 217.932 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '379.995px 253.308px'
        }}
        x={368.332}
        y={250.521}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'589'}
      </text>
    </React.Fragment>
  ),
  '583C': (color: string, onClick: () => void, selected: boolean, key: any) => (
    <React.Fragment key={key}>
      <path
        key={key}
        onClick={onClick}
        style={{ fill: color, stroke: 'rgb(255,255,255)' }}
        className={selected ? 'seccion selected' : 'seccion'}
        d="M 203.919 207.387 L 181.19 174.265 L 135.687 199.092 L 158.461 234.001 L 203.919 207.387 Z"
      />
      <text
        onClick={onClick}
        className={selected ? 'seccion text selected' : 'seccion text'}
        style={{
          whiteSpace: 'pre',
          transformOrigin: '168.413px 209.249px'
        }}
        x={156.75}
        y={206.46}
        fill="#333"
        fontFamily="Arial,sans-serif"
        fontSize="11.1px"
        fontWeight={700}
      >
        {'583C'}
      </text>
    </React.Fragment>
  )
}

export { SvgSecciones }
