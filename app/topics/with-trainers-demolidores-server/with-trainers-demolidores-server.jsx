import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-demolidores-server');
}

export default function WithTrainersDemolidoresServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-demolidores-server" />;
}
