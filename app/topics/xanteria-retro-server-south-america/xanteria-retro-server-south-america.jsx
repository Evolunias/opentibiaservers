import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-retro-server-south-america');
}

export default function XanteriaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-retro-server-south-america" />;
}
