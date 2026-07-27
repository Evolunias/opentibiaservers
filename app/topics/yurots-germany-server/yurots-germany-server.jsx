import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-germany-server');
}

export default function YurotsGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-germany-server" />;
}
