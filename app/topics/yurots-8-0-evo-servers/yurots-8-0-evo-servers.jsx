import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-0-evo-servers');
}

export default function Yurots80EvoServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-0-evo-servers" />;
}
