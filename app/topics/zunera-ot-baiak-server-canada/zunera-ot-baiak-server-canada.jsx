import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-baiak-server-canada');
}

export default function ZuneraOtBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-baiak-server-canada" />;
}
