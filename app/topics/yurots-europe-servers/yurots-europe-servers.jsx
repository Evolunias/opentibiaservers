import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-europe-servers');
}

export default function YurotsEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-europe-servers" />;
}
