import { atom } from 'recoil'

/**
 * @description isMobileState 을 통해 전역적으로 width 에 대한 상태 관리 
 * @example
 * ```ts
 *  import { useRecoilValue } from "recoil"
    import { isMobileState } from "src/recoil"

    const isMobile = useRecoilValue(isMobileState)
    
    ...

    <LabelButton
      content={data.LabelButton.font.frontend}
      variant={isMobile ? "font" : "bigfont"}
      style={{ transform: "rotate(-10.194deg)" }}
    />

    or

    {isMobile && (
      <Lottie
        loop
        animationData={webLottie}
        play
        style={{
          width: 330,
          height: 330,
          top: 480,
        }}
      />
    )}
 * ```
 */
export const isMobileState = atom({
  key: 'isMobile',
  default: window.innerWidth < 768,
})

export const isTabletState = atom({
  key: 'isTablet',
  default: window.innerWidth >= 768 && window.innerWidth < 901,
})

export const isDesktopState = atom({
  key: 'isDesktop',
  default: window.innerWidth >= 901,
})

export const currentWidthState = atom({
  key: 'currentWidth',
  default: window.innerWidth,
})
