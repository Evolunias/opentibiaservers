import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-uk');
}

export default function XanteriaCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-uk" />;
}
