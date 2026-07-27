import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-evo-servers');
}

export default function Yurots11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-evo-servers" />;
}
