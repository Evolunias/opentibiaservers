import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-uk');
}

export default function WithTrainersForumUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-uk" />;
}
