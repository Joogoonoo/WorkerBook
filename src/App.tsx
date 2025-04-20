import  { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import WorkerDetail from './pages/WorkerDetail';
import AddWorker from './pages/AddWorker';
import ContractorsList from './pages/ContractorsList';
import ContractorDetail from './pages/ContractorDetail';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path="/worker/:id" element={
        <ProtectedRoute>
          <WorkerDetail />
        </ProtectedRoute>
      } />
      <Route path="/add" element={
        <ProtectedRoute>
          <AddWorker />
        </ProtectedRoute>
      } />
      <Route path="/contractors" element={
        <ProtectedRoute>
          <ContractorsList />
        </ProtectedRoute>
      } />
      <Route path="/contractor/:id" element={
        <ProtectedRoute>
          <ContractorDetail />
        </ProtectedRoute>
      } />
    </Routes>
  );
}

export default App;
 
