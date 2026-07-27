import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-trashformers-server');
}

export default function WithTrainersTrashformersServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-trashformers-server" />;
}
