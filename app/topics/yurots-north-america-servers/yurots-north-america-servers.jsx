import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-north-america-servers');
}

export default function YurotsNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-north-america-servers" />;
}
