import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-evo-servers');
}

export default function Yurots15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-evo-servers" />;
}
