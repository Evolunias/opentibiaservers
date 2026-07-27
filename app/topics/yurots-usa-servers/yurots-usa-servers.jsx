import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-usa-servers');
}

export default function YurotsUsaServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-usa-servers" />;
}
