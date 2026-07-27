import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-high-exp-server-sweden');
}

export default function ZuneraOtHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-high-exp-server-sweden" />;
}
