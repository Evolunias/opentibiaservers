import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-72-custom-map-server');
}

export default function ZuneraOt772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-72-custom-map-server" />;
}
