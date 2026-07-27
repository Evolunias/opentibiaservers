import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-sweden');
}

export default function XanteriaCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-sweden" />;
}
