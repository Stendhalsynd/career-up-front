'use client'

/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import { Responsive } from 'types'
import {
  toPropValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
} from 'utils/styles'

// 버튼 변형
export type ButtonVariant =
  | 'primary'
  | 'dark'
  | 'gray'
  | 'white'
  | 'clear'
  | 'border'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  fontSize?: Responsive<FontSize | string>
  fontWeight?: Responsive<string>
  letterSpacing?: Responsive<LetterSpacing>
  lineHeight?: Responsive<LineHeight>
  textAlign?: Responsive<string>
  color?: Responsive<Color>
  backgroundColor?: Responsive<Color> | string
  width?: Responsive<string>
  height?: Responsive<string>
  minWidth?: Responsive<string>
  minHeight?: Responsive<string>
  maxWidth?: Responsive<string>
  display?: Responsive<string>
  border?: Responsive<string>
  borderRadius?: Responsive<string>
  overflow?: Responsive<string>
  margin?: Responsive<string>
  marginTop?: Responsive<string>
  marginRight?: Responsive<string>
  marginBottom?: Responsive<string>
  marginLeft?: Responsive<string>
  padding?: Responsive<string>
  paddingTop?: Responsive<string>
  paddingRight?: Responsive<string>
  paddingBottom?: Responsive<string>
  paddingLeft?: Responsive<string>
  pseudoClass?: {
    hover?: {
      backgroundColor?: Responsive<Color>
    }
    disabled?: {
      backgroundColor?: Responsive<Color>
    }
  }
}

const variants = {
  // Primary
  primary: {
    color: 'white',
    backgroundColor: 'primary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'none',
      },
      disabled: {
        backgroundColor: 'none',
      },
    },
  },

  // dark
  dark: {
    color: 'white',
    backgroundColor: 'darkGray',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'none',
      },
      disabled: {
        backgroundColor: 'none',
      },
    },
  },
  // gray
  gray: {
    color: 'white',
    backgroundColor: 'lightGray',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'none',
      },
      disabled: {
        backgroundColor: 'none',
      },
    },
  },

  // White
  white: {
    color: 'primary',
    backgroundColor: 'white',
    border: `1px solid #0A7EFE`,

    pseudoClass: {
      hover: {
        backgroundColor: 'none',
      },
      disabled: {
        backgroundColor: 'none',
      },
    },
  },

  // Clear
  clear: {
    color: 'black',
    backgroundColor: 'transparent',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'none',
      },
      disabled: {
        backgroundColor: 'none',
      },
    },
  },

  // border
  border: {
    color: 'white',
    backgroundColor: 'none',
    border: `1px solid #0A7EFE`,
    pseudoClass: {
      hover: {
        backgroundColor: 'none',
      },
      disabled: {
        backgroundColor: 'none',
      },
    },
  },
}

/**
 * 버튼
 * 변형, 색생, 타이포그래피, 레이아웃, 스페이스 관련 Props 추가
 */
const Button = styled.button<ButtonProps>`
  ${({ variant, color, backgroundColor, pseudoClass, theme }) => {
    // 변형 스타일 적용
    if (variant && variants[variant]) {
      const styles = []

      styles.push(toPropValue('border', variants[variant].border, theme))
      !color &&
        styles.push(toPropValue('color', variants[variant].color, theme))
      !backgroundColor &&
        styles.push(
          toPropValue(
            'background-color',
            variants[variant].backgroundColor,
            theme,
          ),
        )

      !pseudoClass &&
        styles.push(
          `&:hover {
            ${toPropValue(
              'background-color',
              variants[variant].pseudoClass.hover.backgroundColor,
              theme,
            )}
          }`.replaceAll('\n', ''),
        )
      !pseudoClass &&
        styles.push(
          `&:disabled {
            ${toPropValue(
              'background-color',
              variants[variant].pseudoClass.disabled.backgroundColor,
              theme,
            )}
          }`.replaceAll('\n', ''),
        )
      return styles.join('\n')
    }
  }}
  ${(props) => toPropValue('font-size', props.fontSize, props.theme)}
  ${(props) => toPropValue('letter-spacing', props.letterSpacing, props.theme)}
  ${(props) => toPropValue('line-height', props.lineHeight, props.theme)}
  ${(props) => toPropValue('color', props.color, props.theme)}
  ${(props) =>
    toPropValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toPropValue('width', props.width || '300px', props.theme)}
  ${(props) => toPropValue('height', props.height, props.theme)}
  ${(props) => toPropValue('max-width', props.maxWidth, props.theme)}
  ${(props) => toPropValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropValue('min-height', props.minHeight, props.theme)}
  ${(props) => toPropValue('max-width', props.maxWidth, props.theme)}
  ${(props) => toPropValue('display', props.display, props.theme)}
  ${(props) => toPropValue('border', props.border, props.theme)}
  ${(props) =>
    toPropValue('border-radius', props.borderRadius || '100px', props.theme)}
  ${(props) => toPropValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropValue('margin', props.margin, props.theme)}
  ${(props) => toPropValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropValue('padding', props.padding, props.theme)}
  ${(props) => toPropValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toPropValue('padding-left', props.paddingLeft, props.theme)}
  ${(props) => toPropValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toPropValue('padding-right', props.paddingRight, props.theme)}
  &:hover {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.pseudoClass?.hover?.backgroundColor,
      )}
  }
  &:disabled {
    ${(props) =>
      toPropValue(
        'background-color',
        props?.pseudoClass?.disabled?.backgroundColor,
      )}
  }
  cursor: pointer;
  outline: 0;
  text-decoration: 'none';
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
`

Button.defaultProps = {
  variant: 'primary',
  padding: '10px 40px',
  display: 'inline-block',
  textAlign: 'center',
  fontSize: 'inherit',
}

export default Button
