import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-argentina');
}

export default function XanteriaCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-argentina" />;
}
