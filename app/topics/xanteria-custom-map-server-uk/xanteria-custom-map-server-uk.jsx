import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-uk');
}

export default function XanteriaCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-uk" />;
}
