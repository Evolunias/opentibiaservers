import KeywordTopicPage, { generateMetadata as buildTopicMetadata } from '@/app/topics/[slug]/page';

export function buildStaticKeywordMetadata(slug) {
  return buildTopicMetadata({ params: { slug } });
}

export default function StaticKeywordPage({ slug }) {
  return <KeywordTopicPage params={{ slug }} />;
}
