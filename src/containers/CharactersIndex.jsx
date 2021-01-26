import React, { memo } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CharactersRedux, { CharactersSelectors } from 'stores/CharactersRedux';
import CharacterList from 'components/CharacterList';
import queryString from 'query-string';

export const NovedadesIndexContainer = () => {
  const dispatch = useDispatch();
  const getCharacters = (params) => dispatch(CharactersRedux.charactersRequest(params));
  const data = useSelector(CharactersSelectors.characters);
  const pageInfo = useSelector(CharactersSelectors.pagesInfo);
  const loadMore = () => {
    if (pageInfo.next) {
      const { page } = queryString.parse(pageInfo.next);
      getCharacters({ page });
    }
  };
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={!!pageInfo.next}
      loader={<CircularProgress key={0} />}
    >
      {data ? <CharacterList data={data} /> : <CircularProgress key={0} />}
    </InfiniteScroll>
  );
};

export default memo(NovedadesIndexContainer);
