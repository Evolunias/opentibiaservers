import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-sweden');
}

export default function XanteriaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-sweden" />;
}
