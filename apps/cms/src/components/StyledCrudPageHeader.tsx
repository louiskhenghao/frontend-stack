import styled from "styled-components";
import { CrudPageHeader } from "@lava-x/antd";

export const StyledCrudPageHeader = styled(CrudPageHeader)`
  padding: 0 25px;
  margin-bottom: 25px;

  ${(props) => {
    return `padding-bottom: ${props?.footer ? "initial;" : "15px !important;"}`;
  }}

  .ant-page-header-heading-title {
    font-size: 36px;
    font-weight: normal;
    line-height: initial;
  }
  .page-header-subtitle {
    font-weight: normal;
    font-size: 18px;
    color: #11263c;
    opacity: 0.5;
  }

  @media only screen and (min-width: 768px) {
    padding-left: initial;
    padding-right: initial;
  }
`;

export default StyledCrudPageHeader;
