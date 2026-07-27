import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-custom-map-servers');
}

export default function ZuneraOt14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-custom-map-servers" />;
}
