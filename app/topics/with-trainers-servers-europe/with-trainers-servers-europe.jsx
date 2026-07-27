import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-europe');
}

export default function WithTrainersServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-europe" />;
}
