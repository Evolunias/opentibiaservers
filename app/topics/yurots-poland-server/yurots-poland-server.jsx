import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-poland-server');
}

export default function YurotsPolandServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-poland-server" />;
}
