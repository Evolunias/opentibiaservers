import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-south-america');
}

export default function YurotsRealMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-south-america" />;
}
