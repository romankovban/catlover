import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../core/api';
import { GetRandomCatsDto } from './dto/get-random-cats.dto';

interface GetRandomCatsParams {
  page: number;
  breedId?: string | null;
}

const getRandomCats = async ({ page, breedId }: GetRandomCatsParams) => {
  const { data } = await api.get<GetRandomCatsDto>('images/search', {
    params: {
      limit: 10,
      page: page,
      breed_ids: breedId,
    },
  });

  return data;
};

interface UseRandomCatDataParams {
  breedId?: string | null;
}

export const useRandomCatData = ({ breedId }: UseRandomCatDataParams = {}) => {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [`getRandomCats-${breedId || 'random'}`],
      queryFn: ({ pageParam }) =>
        getRandomCats({ page: pageParam, breedId: breedId }),
      getNextPageParam: (lastPage, pages) => pages.length,
    });

  return {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  };
};
