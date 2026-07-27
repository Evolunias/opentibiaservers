import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-evo-servers');
}

export default function Yurots86EvoServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-evo-servers" />;
}
