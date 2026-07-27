import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-real-map-servers');
}

export default function Xanteria14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-real-map-servers" />;
}
