import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-sweden');
}

export default function YurotsRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-sweden" />;
}
