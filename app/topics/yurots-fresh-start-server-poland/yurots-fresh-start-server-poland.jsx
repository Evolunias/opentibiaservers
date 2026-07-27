import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-poland');
}

export default function YurotsFreshStartServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-poland" />;
}
