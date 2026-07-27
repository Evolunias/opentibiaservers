import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-germany');
}

export default function YurotsCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-germany" />;
}
