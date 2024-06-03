import { useNavigate } from 'react-router-dom';

export default function GoBack({ previousLocation }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (previousLocation) {
      navigate(previousLocation);
    } else {
      navigate('/');
    }
  };

  return <button onClick={handleClick}>Go Back</button>;
}
