import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-baiak-server-uk');
}

export default function ZuneraOtBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-baiak-server-uk" />;
}
