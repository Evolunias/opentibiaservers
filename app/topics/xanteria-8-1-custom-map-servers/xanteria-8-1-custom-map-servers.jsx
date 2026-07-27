import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-custom-map-servers');
}

export default function Xanteria81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-custom-map-servers" />;
}
