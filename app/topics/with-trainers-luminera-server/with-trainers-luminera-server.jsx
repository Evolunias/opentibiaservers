import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-luminera-server');
}

export default function WithTrainersLumineraServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-luminera-server" />;
}
