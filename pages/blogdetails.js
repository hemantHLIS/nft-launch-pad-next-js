import BlogDetailsMain from "../components/blog/blog_details_main";
import Layout from "../components/layout";

const Blogdetails = () => {
    return (<BlogDetailsMain />);
}

Blogdetails.getLayout = (page) => <Layout>{page}</Layout>

export default Blogdetails;