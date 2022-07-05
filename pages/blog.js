import BlogMain from "../components/blog/blog_main";

const { default: Layout } = require("../components/layout");

const Blog = () => {
return (<BlogMain/>);
}

Blog.getLayout = (page) => <Layout>{page}</Layout>

export default Blog;