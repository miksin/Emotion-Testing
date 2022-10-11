import { css } from "./css";

export const EmotionTest = () => (
  <div
    css={[
      css.background.dark,
      css.color.pink,
      css.size.medium,
      css.hover.background.pink,
      css.hover.color.dark,
    ]}
  >
    Emotion Test
  </div>
)
