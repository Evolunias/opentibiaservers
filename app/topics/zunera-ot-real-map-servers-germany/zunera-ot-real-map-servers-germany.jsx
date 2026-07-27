import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-servers-germany');
}

export default function ZuneraOtRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-servers-germany" />;
}
