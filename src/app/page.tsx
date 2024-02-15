import PostList from '@/components/posts/PostList';
import TopicCreateForm from '@/components/topics/TopicCreateForm';
import TopicList from '@/components/topics/TopicList';
import { fetchTopPosts } from '@/db/queries/posts';
import { Divider } from '@nextui-org/react';

export default function HomePage() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="m-2 text-xl font-semibold">Top Posts</h1>
        <PostList fetchData={fetchTopPosts} />
      </div>
      <div className="border px-2 py-3 shadow">
        <TopicCreateForm />
        <Divider className="my-4" />
        <h3 className="mb-2 text-lg">Topics</h3>
        <TopicList />
      </div>
    </div>
  );
}
