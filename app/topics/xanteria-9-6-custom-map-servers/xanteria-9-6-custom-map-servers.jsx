import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-custom-map-servers');
}

export default function Xanteria96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-custom-map-servers" />;
}
