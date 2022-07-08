import BlogMain from "../components/blog/blog_main";

import Layout from "../components/layout";;

const Blog = () => {
return (<BlogMain/>);
}

Blog.getLayout = (page) => <Layout>{page}</Layout>

export default Blog;