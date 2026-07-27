import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-baiak-server-brazil');
}

export default function ZuneraOtBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-baiak-server-brazil" />;
}
