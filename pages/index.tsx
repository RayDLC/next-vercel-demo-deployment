import WhiteLayout from '../components/layouts/WhiteLayout';
import MainLayout from '../components/layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <WhiteLayout>
        <h1 style={{ color: 'black' }}>Home Page</h1>
      </WhiteLayout>
    </MainLayout>
  )
}
