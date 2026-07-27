import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-evo-servers');
}

export default function Yurots71EvoServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-evo-servers" />;
}
