import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-europe');
}

export default function WithTrainersClientEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-europe" />;
}
