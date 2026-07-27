import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-servers-germany');
}

export default function ZuneraOtCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-servers-germany" />;
}
