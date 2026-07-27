import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-low-exp-server-sweden');
}

export default function ZuneraOtLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-low-exp-server-sweden" />;
}
