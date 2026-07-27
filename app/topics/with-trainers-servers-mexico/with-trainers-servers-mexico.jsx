import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-mexico');
}

export default function WithTrainersServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-mexico" />;
}
