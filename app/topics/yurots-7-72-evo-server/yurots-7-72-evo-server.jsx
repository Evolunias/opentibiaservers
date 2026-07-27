import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-72-evo-server');
}

export default function Yurots772EvoServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-72-evo-server" />;
}
