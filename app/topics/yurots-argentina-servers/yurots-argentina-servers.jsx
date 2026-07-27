import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-argentina-servers');
}

export default function YurotsArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-argentina-servers" />;
}
