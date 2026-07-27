import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-nilot-server');
}

export default function WithTrainersNilotServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-nilot-server" />;
}
