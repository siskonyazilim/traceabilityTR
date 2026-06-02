import { notFound, redirect } from 'next/navigation';
import { blogPosts } from '../../data/blogPosts';

export default async function LegacyRootSlugPage({ params }) {
  const { slug } = await params;
  const matchedPost = blogPosts.find((post) => post.slug === slug);

  if (matchedPost) {
    redirect(`/blog/${matchedPost.slug}`);
  }

  notFound();
}
