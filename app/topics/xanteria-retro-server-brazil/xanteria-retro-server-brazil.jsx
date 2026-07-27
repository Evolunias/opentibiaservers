import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-brazil');
}

export default function XanteriaRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-brazil" />;
}
