import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-custom-map-servers');
}

export default function ZuneraOt100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-custom-map-servers" />;
}
