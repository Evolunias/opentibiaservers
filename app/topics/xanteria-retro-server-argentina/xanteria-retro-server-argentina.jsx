import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-argentina');
}

export default function XanteriaRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-argentina" />;
}
