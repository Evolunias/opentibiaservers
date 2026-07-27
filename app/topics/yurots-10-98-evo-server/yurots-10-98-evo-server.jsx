import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-98-evo-server');
}

export default function Yurots1098EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-98-evo-server" />;
}
