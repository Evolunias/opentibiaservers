import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-evo-servers');
}

export default function Yurots12EvoServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-evo-servers" />;
}
