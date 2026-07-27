import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-europe');
}

export default function WithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-europe" />;
}
