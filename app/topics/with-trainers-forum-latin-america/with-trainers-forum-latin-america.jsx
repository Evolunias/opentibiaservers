import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-latin-america');
}

export default function WithTrainersForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-latin-america" />;
}
