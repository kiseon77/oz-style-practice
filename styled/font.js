import { css } from "styled-components";

export const font = (
  size = "16px",
  weight = "400",
) => {
  return css`
  font-size: ${size};
  font-weight: ${weight};
  `;
};
