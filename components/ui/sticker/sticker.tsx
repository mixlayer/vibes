import { CSSProperties } from 'react'

import clsx from 'clsx'

import styles from './sticker.module.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  front: React.ReactNode
  back: React.ReactNode
  shadow: React.ReactNode
  hoverPeel?: number
  activePeel?: number
  peelAngle?: number
  width?: number
  height?: number
  rotation?: number
  animationDuration?: number
  shadowX?: number
  shadowY?: number
}

const toRads = (deg: number) => (deg * Math.PI) / 180.0
const toDegrees = (rads: number) => (rads * 180.0) / Math.PI

export default function Sticker({
  className,
  style,
  front,
  back,
  shadow,
  hoverPeel = 0.1,
  activePeel = 0.3,
  peelAngle = -10,
  width = 145,
  height = 205,
  rotation = 0,
  animationDuration = 350,
  shadowX = -4,
  shadowY = 4,
  ...rest
}: Props) {
  const size = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2))
  const offsetTop = (size - height) / 2
  const offsetLeft = (size - width) / 2
  const rotationAngleFix =
    peelAngle > 90
      ? peelAngle - 90
      : peelAngle < -90
        ? 270 - peelAngle
        : peelAngle < 0
          ? peelAngle + 90
          : 90 - peelAngle
  const diagonalAngle = toDegrees(Math.atan(height / width))
  const angleFix = rotationAngleFix + diagonalAngle
  const angleFixBack = peelAngle + 180
  const offsetDiagonalAngle = (size - Math.sin(toRads(angleFix)) * size) / 2
  const offsetBack = offsetDiagonalAngle - size
  const hoverPeelTranslate = (size - offsetDiagonalAngle * 2) * hoverPeel
  const activePeelTranslate = (size - offsetDiagonalAngle * 2) * activePeel

  return (
    <div
      {...rest}
      className={clsx(styles.sticker, className)}
      style={
        {
          ...style,
          '--width': `${width}px`,
          '--height': `${height}px`,
          '--rotation': `${rotation}deg`,
          '--size': `${size}px`,
          '--offset-top': `${offsetTop}px`,
          '--offset-left': `${offsetLeft}px`,
          '--peel-angle': `${peelAngle}deg`,
          '--offset-diagonal-angle': `${offsetDiagonalAngle}px`,
          '--front-x': `${-offsetDiagonalAngle * Math.cos(toRads(peelAngle))}px`,
          '--front-y': `${-offsetDiagonalAngle * Math.sin(toRads(peelAngle))}px`,
          '--front-hover-x': `${(-offsetDiagonalAngle - hoverPeelTranslate) * Math.cos(toRads(peelAngle))}px`,
          '--front-hover-y': `${(-offsetDiagonalAngle - hoverPeelTranslate) * Math.sin(toRads(peelAngle))}px`,
          '--front-active-x': `${(-offsetDiagonalAngle - activePeelTranslate) * Math.cos(toRads(peelAngle))}px`,
          '--front-active-y': `${(-offsetDiagonalAngle - activePeelTranslate) * Math.sin(toRads(peelAngle))}px`,
          '--front-rotation': `${-peelAngle}deg`,
          '--back-x': `${offsetBack * Math.cos(toRads(angleFixBack))}px`,
          '--back-y': `${offsetBack * Math.sin(toRads(angleFixBack)) * -1}px`,
          '--back-hover-x': `${(offsetBack + hoverPeelTranslate) * Math.cos(toRads(angleFixBack))}px`,
          '--back-hover-y': `${(offsetBack + hoverPeelTranslate) * Math.sin(toRads(angleFixBack)) * -1}px`,
          '--back-active-x': `${(offsetBack + activePeelTranslate) * Math.cos(toRads(angleFixBack))}px`,
          '--back-active-y': `${(offsetBack + activePeelTranslate) * Math.sin(toRads(angleFixBack)) * -1}px`,
          '--back-rotation': `${angleFixBack}deg`,
          '--hover-peel-translate': `${hoverPeelTranslate}px`,
          '--active-peel-translate': `${activePeelTranslate}px`,
          '--shadow-x': `${shadowX}px`,
          '--shadow-y': `${shadowY}px`,
          '--animation-duration': `${animationDuration}ms`,
        } as CSSProperties
      }
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.sclip}>
            <div className={styles.shadow}>{shadow}</div>
          </div>
          <div className={styles.clip}>
            <div className={styles.back}>{back}</div>
            <div className={styles.front}>{front}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
