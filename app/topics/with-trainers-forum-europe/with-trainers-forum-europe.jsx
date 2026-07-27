import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-europe');
}

export default function WithTrainersForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-europe" />;
}
