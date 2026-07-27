import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-server-europe');
}

export default function ZuneraOtCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-server-europe" />;
}
