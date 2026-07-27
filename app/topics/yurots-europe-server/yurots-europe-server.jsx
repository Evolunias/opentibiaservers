import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-europe-server');
}

export default function YurotsEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-europe-server" />;
}
