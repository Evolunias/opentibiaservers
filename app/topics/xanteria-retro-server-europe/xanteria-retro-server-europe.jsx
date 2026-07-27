import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-europe');
}

export default function XanteriaRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-europe" />;
}
