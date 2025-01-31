import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './App';
import Author from './components/Author/Author';

const root = document.getElementById('root');

createRoot(root).render(
  <>
    <App />
    <Author />
  </>
);
