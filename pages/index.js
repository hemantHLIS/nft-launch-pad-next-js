import Home from '../components/home'
import Layout from '../components/layout'

const Index = ()=> {
  return (
    <>
     <Home/>
    </>
  )
}

Index.getLayout = (page) => <Layout>{page}</Layout>;
export default Index;
