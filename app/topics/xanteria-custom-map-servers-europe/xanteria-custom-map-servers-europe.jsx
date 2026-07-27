import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-europe');
}

export default function XanteriaCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-europe" />;
}
