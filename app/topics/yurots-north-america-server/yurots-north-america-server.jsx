import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-north-america-server');
}

export default function YurotsNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-north-america-server" />;
}
