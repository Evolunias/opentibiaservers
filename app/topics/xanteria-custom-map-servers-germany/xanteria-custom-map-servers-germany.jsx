import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-germany');
}

export default function XanteriaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-germany" />;
}
