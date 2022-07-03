/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.0.0/server.ts";
import { Post, listPosts } from "../utils/posts.ts";

export const handler: Handlers<Post[]> = {
  async GET(req, ctx) {
    const posts = await listPosts();
    return ctx.render(posts);
  }
}

export default function Home(props: PageProps<Post[]>) {

  const posts = props.data;

  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <p class={tw`pb-10 text-4xl`}>Daniels Blog</p>

      {posts.map(post => (
        <a href={`/blog/${post.id}`} class={tw`flex border-t gap-4 m-2 p-2 group`}>
          <p>{post.publishAt.toLocaleDateString()}</p>
          <div>
            <p class={tw`group-hover:underline text-xl font-semibold`}>{post.title}</p>
            <p>{post.snippet}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
