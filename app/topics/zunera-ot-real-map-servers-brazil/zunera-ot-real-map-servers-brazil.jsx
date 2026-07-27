import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-servers-brazil');
}

export default function ZuneraOtRealMapServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-servers-brazil" />;
}
