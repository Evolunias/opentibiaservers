import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-custom-map-servers');
}

export default function Xanteria15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-custom-map-servers" />;
}
