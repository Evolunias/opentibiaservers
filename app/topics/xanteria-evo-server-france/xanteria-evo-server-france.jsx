import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-france');
}

export default function XanteriaEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-france" />;
}
