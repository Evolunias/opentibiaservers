import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-custom-map-servers');
}

export default function Xanteria100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-custom-map-servers" />;
}
