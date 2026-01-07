import { Routes, Route } from 'react-router-dom'
import ChatMain from '../pages/ChatMain'
import ChatInternal from '../pages/ChatInternal'

const KimRoutes = [
  {path: '/chat', element: <ChatMain/>},
  {path: '/chat/:id', element: <ChatInternal/>}
];

export default KimRoutes;