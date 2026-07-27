import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-unline-server');
}

export default function WithTrainersUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-unline-server" />;
}
