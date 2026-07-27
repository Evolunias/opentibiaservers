import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-evo-server');
}

export default function Yurots84EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-evo-server" />;
}
