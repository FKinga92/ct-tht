import {styled} from 'styled-components';

export const PicUpReturnInfoSC = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
  padding: 1em 1.785em;
  background-color: #efefef;

  p {
    display: flex;
    flex-direction: column;

    .label {
      font-weight: bold;
    }
  }

  hr {
    margin: 0 1.071em;
  }
`;
