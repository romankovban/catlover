import { FC, MouseEventHandler } from 'react';
import { useSearchParams } from 'react-router-dom';

interface CatCardProps {
  image: string;
  name: string;
  catId: string;
}

export const CatCard: FC<CatCardProps> = ({ image, name, catId }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setCatParam: MouseEventHandler<HTMLElement> = (e) => {
    e.preventDefault();

    setSearchParams({
      cat: catId,
    });
  };

  return (
    <div className="w-80 bg-white border border-gray-200 rounded-lg shadow flex flex-col justify-between dark:bg-gray-800 dark:border-gray-700">
      <a href="#" onClick={setCatParam}>
        <img
          className="rounded-t-lg object-cover object-center h-72 w-80"
          src={image}
          alt={`image-${name}`}
        />
      </a>
      <div className="p-5">
        <a href="#" onClick={setCatParam}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
        </a>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={setCatParam}
        >
          Read more
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};
