import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-south-america');
}

export default function YurotsCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-south-america" />;
}
