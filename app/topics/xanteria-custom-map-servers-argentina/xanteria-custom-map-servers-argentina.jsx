import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-argentina');
}

export default function XanteriaCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-argentina" />;
}
