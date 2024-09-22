// Home.jsx
import Button from '../components/Button/Button'
import Link from '../components/Link/Link'

function Home () {
  return (
    <div>
      <h2 className="text-2xl font-bold">Welcome to the Design System</h2>
      <p>This is the homepage.</p>

      <Button color='blue' size='md' rounded='full' variant='outline'>Botón</Button>
      <Link href='https://www.marca.com/' color='purple'>Link</Link>
    </div >
  );
}

export default Home;
