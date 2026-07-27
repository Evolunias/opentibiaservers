import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-latin-america');
}

export default function YurotsFreshStartServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-latin-america" />;
}
