import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-argentina');
}

export default function YurotsCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-argentina" />;
}
