import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-custom-map-servers-latin-america');
}

export default function YurotsCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-custom-map-servers-latin-america" />;
}
