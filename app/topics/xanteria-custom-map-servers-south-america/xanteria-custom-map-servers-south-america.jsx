import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-south-america');
}

export default function XanteriaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-south-america" />;
}
