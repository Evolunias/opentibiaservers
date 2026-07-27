import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-server-brazil');
}

export default function ZuneraOtCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-server-brazil" />;
}
