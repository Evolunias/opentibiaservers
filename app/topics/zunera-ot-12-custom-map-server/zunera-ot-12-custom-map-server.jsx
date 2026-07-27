import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-custom-map-server');
}

export default function ZuneraOt12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-custom-map-server" />;
}
