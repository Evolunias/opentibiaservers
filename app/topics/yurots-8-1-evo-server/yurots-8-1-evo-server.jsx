import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-evo-server');
}

export default function Yurots81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-evo-server" />;
}
