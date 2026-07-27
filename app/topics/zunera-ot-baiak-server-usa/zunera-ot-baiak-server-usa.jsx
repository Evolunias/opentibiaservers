import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-baiak-server-usa');
}

export default function ZuneraOtBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-baiak-server-usa" />;
}
