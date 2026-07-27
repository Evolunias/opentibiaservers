import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-europe');
}

export default function YurotsFreshStartServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-europe" />;
}
