import {Link} from 'react-router';
import {styled} from 'styled-components';

export const CarDetailsSC = styled.div`
  max-width: 45em;
  margin: 0 auto;

  .vendor-logo-container {
    display: flex;
    justify-content: space-between;
    height: 2em;
  }

  .car-img-container {
    max-width: 85%;
    margin: 0 auto;

    img {
      max-width: 100%;
    }
  }

  .model-info,
  .price {
    margin: 2em 0;
  }

  .detail-icons-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.5em;

    > div {
      display: flex;
      align-items: center;
      gap: 1rem;

      img {
        height: 2.5em;
        width: 2.5em;
      }
    }
  }

  hr {
    margin: 1.5em 0;
  }

  @media only screen and (max-width: 600px) {
    max-width: 100%;
    padding: 1em;
  }
`;

export const LinkSC = styled(Link)`
  color: var(--pimary);
`;
