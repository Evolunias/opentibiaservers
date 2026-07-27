import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-custom-map-servers');
}

export default function Xanteria14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-custom-map-servers" />;
}
