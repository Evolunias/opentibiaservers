import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-latin-america-server');
}

export default function YurotsLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-latin-america-server" />;
}
