import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-mexico');
}

export default function XanteriaRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-mexico" />;
}
