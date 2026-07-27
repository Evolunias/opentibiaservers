import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-sweden');
}

export default function YurotsCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-sweden" />;
}
