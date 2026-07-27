import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-evo-servers');
}

export default function Yurots81EvoServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-evo-servers" />;
}
