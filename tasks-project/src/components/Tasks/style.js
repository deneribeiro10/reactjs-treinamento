import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Informations = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 25px;
  padding-bottom: 15px;

  color: var(--gray-100);

  border-bottom: 1px solid #fff;

  width: 100%;
`;

export const Information = styled.div``;

export const List = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 25px;
  padding-bottom: 15px;

  color: var(--gray-100);

  width: 100%;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  background-color: var(--gray-500);
  border-radius: 0.5rem;
  margin-bottom: 15px;
`;

export const IsComplete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  margin: 15px;

  color: var(--gray-100);
  background-color: ${(p) => p.isComplete ? "var(--purple-dark)" : "transparent"};

  border-radius: 50%;

  border: ${(p) => (p.isComplete ? "0" : "2px solid var(--blue)")};

  cursor: pointer;
`;

export const Content = styled.div`
  flex: 1;
  text-decoration: ${(p) => p.isComplete ? "line-through" : "none"};

  cursor: pointer;
`;

export const Trash = styled.button`
  width: 25px;
  height: 25px;
  margin: 15px;
  color: #fff;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.5rem;
  border: 0;

  background-color: var(--blue-dark);
  color: var(--gray-100);

  gap: 5px;
  padding: 1rem;
  margin-left: 0.5rem;

  cursor: pointer;
`;