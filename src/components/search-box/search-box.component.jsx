import styled from 'styled-components';

const StyledInput = styled.input`
  -webkit-appearance: none;
  border: none;
  outline: none;
  padding: 10px;
  width: 150px;
  line-height: 30px;
  margin-bottom: 30px;
`;

export function SearchBox({ placeholder, handleChange }) {
  return (
    <StyledInput
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
}
