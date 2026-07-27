import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-usa');
}

export default function XanteriaRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-usa" />;
}
