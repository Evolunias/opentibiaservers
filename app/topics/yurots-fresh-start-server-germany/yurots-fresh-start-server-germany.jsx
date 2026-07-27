import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-germany');
}

export default function YurotsFreshStartServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-germany" />;
}
