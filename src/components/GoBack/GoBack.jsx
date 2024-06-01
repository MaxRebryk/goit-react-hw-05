import { useNavigate, useLocation } from 'react-router-dom';

export default function GoBack() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.state) {
      navigate(location.state);
    } else {
      navigate('/');
    }
  };

  return <button onClick={handleClick}>Go Back</button>;
}
