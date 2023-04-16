import { useQuery } from '@tanstack/react-query';
import { GetBreedsDto } from './dto/get-breeds.dto';
import { api } from '../core/api';

const getBreeds = async () => {
  const { data } = await api.get<GetBreedsDto>('breeds');

  return data;
};

export const useBreedData = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getBreeds'],
    queryFn: getBreeds,
  });

  return {
    data,
    isError,
    isLoading,
  };
};
