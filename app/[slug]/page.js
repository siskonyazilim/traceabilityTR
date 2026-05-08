import { notFound, redirect } from 'next/navigation';
import { blogPosts } from '../../data/blogPosts';

export default function LegacyRootSlugPage({ params }) {
  const { slug } = params;
  const matchedPost = blogPosts.find((post) => post.slug === slug);

  if (matchedPost) {
    redirect(`/blog/${matchedPost.slug}`);
  }

  notFound();
}
