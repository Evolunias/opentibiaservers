import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-germany-servers');
}

export default function YurotsGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-germany-servers" />;
}
