import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import { useState } from 'react';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  const [selectedGenreId, setSelectedGenreId] = useState(1);


  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar 
        genres={genres} 
        selectedGenreId={selectedGenreId} 
        setSelectedGenreId={setSelectedGenreId} 
      />
      <Content selectedGenreId={selectedGenreId} setGenres={setGenres} />
    </div>
  )
}