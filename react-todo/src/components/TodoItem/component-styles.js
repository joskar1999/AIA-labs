import styled from 'styled-components';

export const TodoContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const TodoContentBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 60%;
  margin: 8px 16px;
  background: lightgray;
`;

export const ItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TitleHeader = styled.h3`
  font-size: 18px;
  margin-left: 16px;
`;

export const RatingBar = styled.div`
  margin: 16px 16px 0 0;
`;

export const ThumbnailImage = styled.img`
  width: 200px;
  margin: 0 16px 16px 16px;
`;

export const Description = styled.div`
  margin: 0 16px 16px 0;
`;

export const TitleInput = styled.input`
  margin: 16px;
  padding: 5px;
`;

export const DescriptionEditor = styled.textarea`
  margin: 0 16px 16px 0;
  resize: none;
  width: 100%;
`;