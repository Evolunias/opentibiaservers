import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-evo-server');
}

export default function Yurots71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-evo-server" />;
}
