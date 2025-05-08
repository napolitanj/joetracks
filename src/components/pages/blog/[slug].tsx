import { GetServerSideProps } from "next";
import { createClient } from "@supabase/supabase-js";
import Head from "next/head";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface BlogPostProps {
  post: {
    title: string;
    content: string;
    created_at: string;
  } | null;
}

export default function BlogPostPage({ post }: BlogPostProps) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="prose mx-auto p-4">
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500">
          {new Date(post.created_at).toLocaleDateString()}
        </p>
        <div>{post.content}</div>
      </article>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug as string;

  const { data: post, error } = await supabase
    .from("posts")
    .select("title, content, created_at")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !post) {
    return { props: { post: null } };
  }

  return {
    props: {
      post,
    },
  };
};
