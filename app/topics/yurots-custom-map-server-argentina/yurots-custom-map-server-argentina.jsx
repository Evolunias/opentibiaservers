import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-server-argentina');
}

export default function YurotsCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-server-argentina" />;
}
