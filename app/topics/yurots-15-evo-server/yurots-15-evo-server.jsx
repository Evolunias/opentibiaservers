import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-evo-server');
}

export default function Yurots15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-evo-server" />;
}
