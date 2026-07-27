import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-0-custom-map-server');
}

export default function ZuneraOt80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-0-custom-map-server" />;
}
