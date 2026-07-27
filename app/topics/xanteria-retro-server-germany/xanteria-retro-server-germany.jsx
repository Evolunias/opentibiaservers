import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-germany');
}

export default function XanteriaRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-germany" />;
}
