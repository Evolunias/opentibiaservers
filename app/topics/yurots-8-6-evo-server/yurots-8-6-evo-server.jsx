import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-evo-server');
}

export default function Yurots86EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-evo-server" />;
}
