import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-uk');
}

export default function XanteriaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-uk" />;
}
