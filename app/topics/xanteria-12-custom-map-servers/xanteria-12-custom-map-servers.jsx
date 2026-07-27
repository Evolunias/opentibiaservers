import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-custom-map-servers');
}

export default function Xanteria12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-custom-map-servers" />;
}
