import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-usa-server');
}

export default function YurotsUsaServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-usa-server" />;
}
