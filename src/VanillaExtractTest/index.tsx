import { css } from "./index.css"

export const VanillaExtractTest = () => (
  <div className={[css.background.dark, css.color.pink, css.size.medium].join(' ')}>Test</div>
)
