import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-98-custom-map-server');
}

export default function ZuneraOt1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-98-custom-map-server" />;
}
