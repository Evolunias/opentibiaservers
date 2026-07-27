import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-germany');
}

export default function XanteriaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-germany" />;
}
