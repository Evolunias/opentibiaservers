import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-evo-server');
}

export default function Yurots12EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-evo-server" />;
}
