import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-midhem-server');
}

export default function WithTrainersMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-midhem-server" />;
}
