import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-servers-poland');
}

export default function XanteriaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-servers-poland" />;
}
