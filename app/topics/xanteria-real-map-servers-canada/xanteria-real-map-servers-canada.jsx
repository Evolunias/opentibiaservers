import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-servers-canada');
}

export default function XanteriaRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-servers-canada" />;
}
