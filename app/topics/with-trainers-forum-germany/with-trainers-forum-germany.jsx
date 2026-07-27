import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-germany');
}

export default function WithTrainersForumGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-germany" />;
}
