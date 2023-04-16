import { FC } from 'react';
import { useRandomCatData } from '../api/use-random-cat-data.hook';
import { CatCard } from '../components/cat-card.component';
import { Button } from '../components/button.component';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = ({}) => {
  const { data, isError, isLoading, fetchNextPage, isFetchingNextPage } =
    useRandomCatData();

  if (isError) {
    return <div>Ooops, something wrong happened</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No cats :(</div>;
  }

  return (
    <div className="p-8 flex flex-col justify-center">
      <div className="flex flex-wrap gap-8 justify-center mb-8">
        {data.pages.map((page) => {
          return page.map((cat) => (
            <CatCard
              key={cat.id}
              catId={cat.id}
              image={cat.url}
              name={cat.breeds.map((b) => b.name).join(',') || 'Cute cats'}
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
