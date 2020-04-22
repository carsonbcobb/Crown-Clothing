import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const CollectionItemContainer = styled.div`
  .collection-item {
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;

    .image {
      width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;
    }

    .custom-button {
      width: 80%;
      opacity: 0.7;
      position: absolute;
      top: 255px;
      display: none;

      @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 10px 0 10px;
      }
    }

    &:hover {
      .image {
        opacity: 0.8;
      }
      .custom-button {
        opacity: 0.85;
        display: flex;
      }
    }

    .collection-footer {
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;

      .name {
        width: 90%;
        margin-bottom: 15px;
      }

      .price {
        width: 10%;
      }
    }
    @media screen and (max-width: 800px) {
      width: 40vw;

      &:hover {
        .image {
          opacity: unset;
        }
        .custom-button {
          opacity: unset;
          display: flex;
        }
      }
    }
  }
`;