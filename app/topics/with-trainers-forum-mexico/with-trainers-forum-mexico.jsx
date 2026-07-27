import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-mexico');
}

export default function WithTrainersForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-mexico" />;
}
