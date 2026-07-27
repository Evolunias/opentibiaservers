import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-canada');
}

export default function YurotsFreshStartServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-canada" />;
}
