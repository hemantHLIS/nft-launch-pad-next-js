import FractionStep1Main from "../components/fractionalize/fraction_step_1_main";
import Layout from '../components/layout';
const Fractionstep1 = () => {
    return (<><FractionStep1Main/></>);
}

Fractionstep1.getLayout = (page) => <Layout>{page}</Layout>

export default Fractionstep1;