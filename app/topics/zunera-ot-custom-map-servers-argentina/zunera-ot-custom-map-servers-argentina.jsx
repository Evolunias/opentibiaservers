import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-servers-argentina');
}

export default function ZuneraOtCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-servers-argentina" />;
}
