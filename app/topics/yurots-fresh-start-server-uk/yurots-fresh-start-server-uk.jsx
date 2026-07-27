import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-uk');
}

export default function YurotsFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-uk" />;
}
