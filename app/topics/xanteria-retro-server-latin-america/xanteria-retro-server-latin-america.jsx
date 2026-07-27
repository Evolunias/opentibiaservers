import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-latin-america');
}

export default function XanteriaRetroServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-latin-america" />;
}
