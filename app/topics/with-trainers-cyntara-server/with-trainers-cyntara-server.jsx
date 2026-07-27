import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-cyntara-server');
}

export default function WithTrainersCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-cyntara-server" />;
}
