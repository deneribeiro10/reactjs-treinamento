import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 0;

  color: var(--gray-100);
  background-color: var(--gray-500);

  &::placeholder {
    color: var(--gray-300);
  }
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