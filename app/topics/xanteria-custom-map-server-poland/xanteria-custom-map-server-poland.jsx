import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-poland');
}

export default function XanteriaCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-poland" />;
}
