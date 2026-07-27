import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-1-custom-map-servers');
}

export default function Xanteria71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-1-custom-map-servers" />;
}
