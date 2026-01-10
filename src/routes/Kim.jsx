import { Routes, Route } from 'react-router-dom'
import ChatMain from '../pages/ChatMain'
import ChatInternal from '../pages/ChatInternal'
import Ending from '../pages/Ending';
import Character from '../pages/Character';

const KimRoutes = [
  {path: '/chat', element: <ChatMain/>},
  {path: '/chat/:id', element: <ChatInternal/>},
  {path: '/ending', element: <Ending/>},
  {path: '/character/:id', element: <Character/>}
];

export default KimRoutes;