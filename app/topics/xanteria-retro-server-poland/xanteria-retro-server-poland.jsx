import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-poland');
}

export default function XanteriaRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-poland" />;
}
