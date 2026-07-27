import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-canada-server');
}

export default function YurotsCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-canada-server" />;
}
