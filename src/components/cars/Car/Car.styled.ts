import styled from 'styled-components';

export const CarSC = styled.div`
  border: 1px solid var(--container);
  border-radius: 0.5em;
  box-shadow: -1px 1px 10px 1px rgba(199, 199, 205, 0.84);
  padding: 0.357em;
  cursor: pointer;
  width: 32%;

  @media only screen and (max-width: 768px) {
    width: 48%;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  .car-img-container {
    img {
      max-width: 14em;
      display: block;
      margin: 0.714em auto;
    }
  }

  .vendor-logo-container {
    display: flex;
    justify-content: flex-end;
    height: 35px;
    padding: 5px;
  }

  .subtitle-s {
    font-weight: 600;
  }

  .detail-icons-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    padding: 0.5714em;
    gap: 1.0714em;
    margin: 1.0714em;

    > div {
      display: flex;
      align-items: center;
      gap: 0.714em;

      img {
        width: 1.785em;
        height: 1.785em;
      }
    }
  }

  .model-info {
    margin: 0.714em;
  }

  .price {
    margin: 1em;

    span:first-child {
      display: inline-block;
      margin-right: 0.071em;
    }
  }

  hr {
    margin: 0 0.714em;
  }
`;
