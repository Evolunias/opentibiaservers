import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-custom-map-servers');
}

export default function ZuneraOt13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-custom-map-servers" />;
}
