import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-server');
}

export default function YurotsServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-server" />;
}
