import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-fresh-start-server-france');
}

export default function YurotsFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-fresh-start-server-france" />;
}
