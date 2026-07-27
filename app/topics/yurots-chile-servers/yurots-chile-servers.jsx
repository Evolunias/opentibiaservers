import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-chile-servers');
}

export default function YurotsChileServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-chile-servers" />;
}
