import { css } from "./index.css"

export const VanillaExtractTest = () => (
  <div
    className={[
      css.background.dark,
      css.color.pink,
      css.size.medium,
      css.hover.background.pink,
      css.hover.color.dark,
    ].join(' ')}
  >
    vanilla-extract test
  </div>
)
