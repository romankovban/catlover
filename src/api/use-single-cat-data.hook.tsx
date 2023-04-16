import { useQuery } from '@tanstack/react-query';
import { api } from '../core/api';
import { GetSingleCatDto } from './dto/get-single-cat.dto';
import { useEffect } from 'react';

interface GetSingleCatParams {
  id: string;
}

const getSingleCat = async ({ id }: GetSingleCatParams) => {
  const { data } = await api.get<GetSingleCatDto>(`images/${id}`);

  return data;
};

interface UseSingleCatDataParams {
  id: string | null;
}

export const useSingleCatData = ({ id }: UseSingleCatDataParams) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: [`getSingleCat-${id}`],
    queryFn: () => getSingleCat({ id: id || '' }),
    enabled: false,
  });

  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id]);

  return {
    data,
    isError,
    isLoading,
  };
};
