import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
  background: white;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 15px;
  padding: 15px;

  @media screen and (min-width: 768px) {
    border-radius: 8px;
    margin-left: 30px;
    margin-right: 30px;
    margin-bottom: 30px;
    padding: 30px;
  }
`;

export default StyledContentWrapper;
