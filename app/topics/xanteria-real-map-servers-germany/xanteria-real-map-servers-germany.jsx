import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-servers-germany');
}

export default function XanteriaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-servers-germany" />;
}
