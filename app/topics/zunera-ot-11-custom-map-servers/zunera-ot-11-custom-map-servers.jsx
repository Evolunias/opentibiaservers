import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-custom-map-servers');
}

export default function ZuneraOt11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-custom-map-servers" />;
}
