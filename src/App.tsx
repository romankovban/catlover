import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home.page';
import { BreedPage } from './pages/breed.page';
import { CatModal } from './components/cat-modal.component';
import { BreedModal } from './components/breed-modal.component';
import { Header } from './components/header.component';
import { FavoritePage } from './pages/favorite.page';

interface AppProps {}

export const App: FC<AppProps> = ({}) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/breed" element={<BreedPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
      </Routes>

      <CatModal />
      <BreedModal />
    </BrowserRouter>
  );
};
