import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '../core/api';
import { GetFavoriteDto } from './dto/get-favorite.dto';

interface GetFavoriteParams {
  page: number;
}

const getFavorite = async ({ page }: GetFavoriteParams) => {
  const { data } = await api.get<GetFavoriteDto>('favourites', {
    params: {
      sub_id: 'roman_kovban',
      limit: 10,
      page,
    },
  });

  return data;
};

export const useFavoriteData = () => {
  const { data, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['getFavoriteData'],
      queryFn: ({ pageParam }) => getFavorite({ page: pageParam }),
      getNextPageParam: (lastPage, pages) => pages.length,
    });

  return { data, isLoading, isError, fetchNextPage, isFetchingNextPage };
};
