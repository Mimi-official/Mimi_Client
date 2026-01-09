import { Routes, Route } from 'react-router-dom'
import ChatMain from '../pages/ChatMain'
import ChatInternal from '../pages/ChatInternal'
import Ending from '../pages/Ending';

const KimRoutes = [
  {path: '/chat', element: <ChatMain/>},
  {path: '/chat/:id', element: <ChatInternal/>},
  {path: '/ending', element: <Ending/>}
];

export default KimRoutes;