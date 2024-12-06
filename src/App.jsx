import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './Layout/DefaultLayout';
import HomePage from './pages/HomePage';
import ChiSiamo from './pages/ChiSiamo';
import PostList from './pages/PostList';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/chisiamo" element={<ChiSiamo />} />
                    <Route path="/posts" element={<PostList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
