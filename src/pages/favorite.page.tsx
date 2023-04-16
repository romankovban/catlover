import { FC } from 'react';
import { useFavoriteData } from '../api/use-favorite-data.hook';
import { CatCard } from '../components/cat-card.component';
import { Button } from '../components/button.component';

interface FavoritePageProps {}

export const FavoritePage: FC<FavoritePageProps> = ({}) => {
  const { data, isError, isLoading, fetchNextPage, isFetchingNextPage } =
    useFavoriteData();

  if (isError) {
    return <div>Ooops, something wrong happened</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No favorite cats :(</div>;
  }

  return (
    <div className="p-8 flex flex-col justify-center">
      <div className="flex flex-wrap gap-8 justify-center mb-8">
        {data.pages.map((page) => {
          return page.map((cat) => (
            <CatCard
              key={cat.id}
              image={cat.image.url}
              catId={cat.image.id}
              name={'Cute cats'}
            />
          ));
        })}
      </div>
      <div className="self-center">
        {data.pages[data.pages.length - 1].length === 10 && (
          <Button
            isLoading={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            Load more
          </Button>
        )}
      </div>
    </div>
  );
};
