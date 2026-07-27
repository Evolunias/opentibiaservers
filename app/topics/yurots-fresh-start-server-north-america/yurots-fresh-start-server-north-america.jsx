import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-north-america');
}

export default function YurotsFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-north-america" />;
}
