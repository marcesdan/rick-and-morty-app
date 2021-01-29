import React, { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CircularProgress, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CharactersRedux, { CharactersSelectors } from 'stores/CharactersRedux';
import CharacterList from 'components/CharacterList';
import CharacterFilters from 'components/CharacterFilters';
import Typography from '@material-ui/core/Typography';

export const NovedadesIndexContainer = () => {
  const dispatch = useDispatch();
  const fetchCharacters = () => dispatch(CharactersRedux.charactersRequest());
  const changeFilter = (filter) => dispatch(CharactersRedux.changeFilter(filter));
  const data = useSelector(CharactersSelectors.characters);
  const pageInfo = useSelector(CharactersSelectors.pagesInfo);
  // const isFetching = useSelector(CharactersSelectors.isFetching);
  const selectedFilters = useSelector(CharactersSelectors.selectedFilters);
  const loadMore = () => {
    if (pageInfo.next) {
      fetchCharacters();
    }
  };

  return (
    <Container maxWidth={false}>
      <Typography component="h4" variant="h4" gutterBottom>
        Los personajes de Rick & Morty
      </Typography>
      <CharacterFilters filters={selectedFilters} onChange={changeFilter} />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={!!pageInfo.next}
        loader={<CircularProgress key={0} />}
      >
        <CharacterList data={data} />
      </InfiniteScroll>
    </Container>
  );
};
export default memo(NovedadesIndexContainer);
