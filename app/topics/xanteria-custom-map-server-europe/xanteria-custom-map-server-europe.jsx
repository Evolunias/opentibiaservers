import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-europe');
}

export default function XanteriaCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-europe" />;
}
