import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-fresh-start-server-france');
}

export default function XanteriaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-fresh-start-server-france" />;
}
