import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-argentina-server');
}

export default function YurotsArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-argentina-server" />;
}
