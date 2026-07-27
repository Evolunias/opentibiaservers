import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-evo-server');
}

export default function Yurots100EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-evo-server" />;
}
