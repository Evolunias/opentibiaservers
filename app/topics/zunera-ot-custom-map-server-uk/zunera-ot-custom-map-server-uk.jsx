import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-server-uk');
}

export default function ZuneraOtCustomMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-server-uk" />;
}
