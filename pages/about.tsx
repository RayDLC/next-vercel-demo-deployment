import MainLayout from '../components/layouts/MainLayout'
import WhiteLayout from '../components/layouts/WhiteLayout'

export default function AboutPage() {
  return (
    <>      
        <h1 style={{ color: 'black' }}>About Page</h1>      
    </>
  )
}

AboutPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
      <WhiteLayout>
        { page }
      </WhiteLayout>
    </MainLayout>
  );
}