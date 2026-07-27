import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-canada');
}

export default function XanteriaRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-canada" />;
}
