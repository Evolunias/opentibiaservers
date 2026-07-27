import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-latin-america-servers');
}

export default function YurotsLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-latin-america-servers" />;
}
