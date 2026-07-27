import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-france');
}

export default function XanteriaRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-france" />;
}
