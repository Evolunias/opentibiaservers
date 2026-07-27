import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-sweden');
}

export default function YurotsCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-sweden" />;
}
