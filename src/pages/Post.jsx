import Header from "../components/Header";
import Footer from "../components/Footer";

import posts from "../data/posts";

function Post() {
    return (
        <>
        <Header title="Meu Blog"/>
        <h1>(posts[0].title)</h1>
        <p>(posts[0].autor) / (posts[0].date)</p>
        <p>(posts[0].content)</p>
        <Footer text="Direitos reservados."/>
        </>
    );
}

export default Post