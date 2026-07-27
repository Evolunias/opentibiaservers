import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-brazil');
}

export default function YurotsCustomMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-brazil" />;
}
