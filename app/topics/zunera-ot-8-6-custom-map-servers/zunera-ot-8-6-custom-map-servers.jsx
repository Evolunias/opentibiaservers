import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-6-custom-map-servers');
}

export default function ZuneraOt86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-6-custom-map-servers" />;
}
