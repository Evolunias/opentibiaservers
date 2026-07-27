import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-north-america');
}

export default function XanteriaRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-north-america" />;
}
