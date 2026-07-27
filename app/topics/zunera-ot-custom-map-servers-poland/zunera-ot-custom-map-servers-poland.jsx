import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-servers-poland');
}

export default function ZuneraOtCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-servers-poland" />;
}
