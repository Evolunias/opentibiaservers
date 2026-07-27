import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-south-america');
}

export default function XanteriaCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-south-america" />;
}
