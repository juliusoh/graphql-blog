import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import FeaturedPosts from '../sections/FeaturedPosts';

export default function Home({ posts }) {
  console.log('indexjs', posts);
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>ㅈㅇ dev</title>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="Hi! I'm Julius Oh, and I'm a developer who has passion for building clean web applications with intuitive functionality. I enjoy the process of solving problems and creating solutions."></meta>
        <meta name="keywords" content="Julius Oh fullstack developer portfolio software engineer frontend developer julius oh" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.slice(0).reverse().map((post, index) => (
            <PostCard post={post.node} key={index} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
