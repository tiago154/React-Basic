import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #f3f0ee;
  flex-direction: column;
  min-height: 436px;
  border-radius: 5px;
  padding: 10px;

  h2 {
    font-size: 20px;
  }
`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContainerAbilities = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  flex-grow: 2;

  h2 {
    margin-bottom: 10px;
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 18px;
  text-align: justify;
`;
