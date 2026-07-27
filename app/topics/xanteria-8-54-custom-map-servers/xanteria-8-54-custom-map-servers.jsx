import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-custom-map-servers');
}

export default function Xanteria854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-custom-map-servers" />;
}
