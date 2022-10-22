import { Header, Form, SearchButton, SearchInput } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';

export const Searchbar = ({ handleSubmit }) => {
  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <span>
            <ImSearch />
          </span>
        </SearchButton>

        <SearchInput
          name="query"
          type="text"
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
