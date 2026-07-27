import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-france');
}

export default function WithTrainersForumFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-france" />;
}
