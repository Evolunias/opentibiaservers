import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-ot-server-europe');
}

export default function WithTrainersOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-ot-server-europe" />;
}
