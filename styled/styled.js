import { css } from "styled-components";

export const flex = (
  direction = "row",
  justify = "start",
  align = "stretch",
  gap = "0",
  wrap = "nowrap"
) => {
  return css`
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
    gap: ${gap};
    flex-wrap: ${wrap};
  `;
};