import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-mexico');
}

export default function YurotsFreshStartServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-mexico" />;
}
