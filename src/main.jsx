import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/vars.css';
import './assets/index.css';

// Layouts
import PrototypeLayout from './layout/prototype/PrototypeLayout.jsx';

// Pages
const MainPage = lazy(() => import('./page/main/MainPage.jsx'));
import Error from './page/error/Error.jsx';

// Components
import Loading from './component/loading/Loading.jsx';


createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<StrictMode>
			<Routes>
				<Route path="/Portfolio_v1/" element={<PrototypeLayout/>}>
					<Route path="/Portfolio_v1/" element={
            <Suspense fallback={<Loading/>}>
              <MainPage/>
            </Suspense>
          }/>
					<Route path="/Portfolio_v1/main" element={<MainPage/>}/>
				</Route>
				<Route path='*' element={<Error/>}/>
			</Routes>
		</StrictMode>
	</BrowserRouter>,
)