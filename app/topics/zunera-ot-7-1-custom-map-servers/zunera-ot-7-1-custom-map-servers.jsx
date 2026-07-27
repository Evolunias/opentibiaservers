import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-1-custom-map-servers');
}

export default function ZuneraOt71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-1-custom-map-servers" />;
}
