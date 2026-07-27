import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-chile-server');
}

export default function YurotsChileServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-chile-server" />;
}
