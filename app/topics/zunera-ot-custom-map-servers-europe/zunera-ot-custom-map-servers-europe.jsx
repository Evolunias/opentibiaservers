import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-servers-europe');
}

export default function ZuneraOtCustomMapServersEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-servers-europe" />;
}
