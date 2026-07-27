import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-evo-server');
}

export default function Yurots11EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-evo-server" />;
}
