import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-evo-server');
}

export default function Yurots14EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-evo-server" />;
}
