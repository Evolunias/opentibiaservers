import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-poland');
}

export default function XanteriaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-poland" />;
}
