import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-poland-servers');
}

export default function YurotsPolandServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-poland-servers" />;
}
