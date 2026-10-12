import { getSubstackPosts } from '@/lib/utils/substack';
import SubstackCard from './SubstackCard';
import { Container } from '@/lib/wrappers/Container';

const Substack = async () => {
  const posts = await getSubstackPosts();

  return (
    <section className="py-20">
      <Container size="default" className="flex flex-col gap-15">
        <h2 className="text-[#181818] text-[1.3rem] tracking-[1%] leading-[20px] font-light">
          My Substack
        </h2>
        
        {posts && posts.length > 0 ? (
          <div className="grid md:grid-cols-[1fr_1fr] gap-4">
            {posts.map(post => (
              <SubstackCard key={post.id || post.link} post={post} />
            ))}
          </div>
        ) : (
          <div className="bg-[#FAFAFA] rounded-[24px] py-12 px-6 flex flex-col items-center justify-center text-center">
            <p className="text-[#777777] text-[0.9rem] font-light tracking-[1%]">
              No Substack posts yet. Check back soon!
            </p>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Substack;
