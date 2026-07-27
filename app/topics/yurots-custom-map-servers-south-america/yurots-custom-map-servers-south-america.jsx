import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-south-america');
}

export default function YurotsCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-south-america" />;
}
