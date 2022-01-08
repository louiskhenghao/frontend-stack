import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SharedUiComponentProps {}

const StyledSharedUiComponent = styled.div`
  color: pink;
`;

export function SharedUiComponent(props: SharedUiComponentProps) {
  return (
    <StyledSharedUiComponent>
      <h1>Welcome to SharedUiComponent!</h1>
    </StyledSharedUiComponent>
  );
}

export default SharedUiComponent;
