import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <main>
      <h1>Page not found..</h1>
      <Link to="/">Go Home Page</Link>
    </main>
  );
}
